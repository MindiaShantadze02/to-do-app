import {
    SET_TASKS,
    DELETE_TASK,
    CLEAR_TASKS,
    SET_DONE,
    SHOW_ALL,
    SHOW_COMPLETED,
    EDIT_TASK
} from './types';
const TasksReducer = ( state, action ) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case CLEAR_TASKS:
            return {
                ...state,
                tasks: []
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case SET_DONE:
                let tempTasks = state.tasks.map((task) => {
                    if (task.id === action.payload) {
                        return { ...task, isDone:true }
                    }
                    return task;
                })
                return { ...state , tasks: tempTasks , doneTasksCount: state.doneTasksCount + 1 }
        case  SHOW_ALL:
            return {
                tasks: state.tasks
                }
        case SHOW_COMPLETED:
            return {
                tasks: state.tasks.filter(task => task.isDone)
                }
        case EDIT_TASK:
                let editedTasks = state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return {
                            ...task,
                            text: action.payload.newText
                        }
                    }
                    return task;
                });
                return {...state, tasks: editedTasks}
        default:
            return state;
    }
}
export default TasksReducer;