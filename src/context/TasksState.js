import TasksContext from './TasksContext';
import TasksReducer from './TasksReducer';
import { useReducer , useEffect } from 'react';
import {
    SET_TASKS,
    DELETE_TASK,
    CLEAR_TASKS,
    SET_DONE,
    EDIT_TASK

} from './types';
const initialState = {
    tasks:[],
    task: {},
    tasksCount: 0,
    doneTasksCount: 0
}

const TasksState = ({children}) => {
    const [state, dispatch] = useReducer(TasksReducer, initialState);
    const setTask = (taskObject) => {
        dispatch({
            type: SET_TASKS,
            payload: taskObject
        })
    }
    const clearTasks = () => {
        dispatch({
            type: CLEAR_TASKS,
        })
    }
    const deleteTask = (id) => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }
    const setDone = (id) => {
        dispatch({
            type: SET_DONE,
            payload: id
        })
    }
    const showAll = () => {
        dispatch({
            type: "SHOW_ALL",
        })
    }
    const showCompleted = () => {
        dispatch({
            type: "SHOW_COMPLETED"
        })
    }
    const editTask = (id,newText) => {
        dispatch({
        type: EDIT_TASK,
        payload: {
            id,
            newText
        }});
    }
    return (<TasksContext.Provider value={
        {
            ...state,
            tasksCount: state.tasks.length,    
            doneTasksCount: state.tasks.filter(task => task.isDone).length,
            setTask,
            clearTasks,
            deleteTask,
            setDone,
            showCompleted,
            showAll,
            editTask
        }
        } >
        {children}
    </TasksContext.Provider>)
}

export default TasksState;