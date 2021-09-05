import { useContext , useState } from 'react';
import TasksContext from '../context/TasksContext';
const Task = ({task}) => {
    const { deleteTask , setDone , editTask } = useContext(TasksContext);
    const [newText, setNewText] = useState("");
    const handleOnChange = (ev) => {
        setNewText(ev.target.value);
    }

    const [showEditButton, setShowEditButton] = useState(false)
    return ( 
        <li className={task.isDone ? "task task-done" : "task"}>
            <p>{task.text}</p>
            <div className="task-commands">
                <button className="task-command task-done"
                    onClick={()=>{
                        setDone(task.id)
                    }}
                ><i className="fas fa-check"></i></button>
                <button className="task-command task-delete" 
                    onClick={()=>{deleteTask(task.id)}}
                ><i className="fas fa-minus"></i></button>
                <span>{task.date}</span>
            </div>
            <button className="show-edit" onClick={
                ()=> {setShowEditButton(!showEditButton)}
            }>Edit text</button>
            {showEditButton && (
                <div className="edit-buttons">
                    <input type="text" className="task-edit" placeholder="Change text"
                    value={newText} onChange={handleOnChange} />
                    <button className="edit-button"
                     onClick={()=>{editTask(task.id, newText)}}
                     >Edit</button>
                </div>
            )}

        </li>
     );
}
 
export default Task;