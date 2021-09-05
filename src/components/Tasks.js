import Task from './Task';
import TasksContext from '../context/TasksContext';
import { useContext } from 'react';
const Tasks = () => {
    const { tasks , clearTasks } = useContext(TasksContext);
    return ( 
        <div className="tasks">
            <button className="clear-tasks" onClick={clearTasks}>Clear tasks</button>
            { tasks.length === 0 && (
                <h3 className='empty-alert'>Tasks list is empty</h3>
            )}
            <ul className="tasks-list">
                {tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))}
            </ul>
        </div>
     );
}
 
export default Tasks;