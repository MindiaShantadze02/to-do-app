import { useContext , useState , useEffect } from 'react';
import TaskContext from '../context/TasksContext';
import { nanoid } from 'nanoid';
const Form = () => {
    const { tasks , tasksCount , setTask , doneTasksCount } = useContext(TaskContext);
    const [newText, setNewText] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const handleOnChange = (ev) => {
        setNewText(ev.target.value);
    }
    const addTask = (ev) => {
        ev.preventDefault();
        const emptyString = /^\s+$/;
        
        if (newText === "" || newText.match(emptyString)) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
        else {
            const taskObject = {
                id: nanoid(),
                text: newText,
                date: new Date().toLocaleDateString(),
                isDone: false,
                isImportant:false
            }
            setTask(taskObject);
        }
        setNewText("");
    }
    return (
        <div className="form-wrapper">
            <div className="app-title">
                <h2>Todo app by <a href="https://github.com/MindiaShantadze02">Mindia Shantadze</a></h2>
            </div>
            <form className="form container" onSubmit={addTask}>
                <input type="text" className="task-input" placeholder='Enter a todo' 
                onChange={handleOnChange}
                value={newText} />
                <button type='submit' className="task-submit">Add todo</button>
            </form>
            {showAlert && (
                <p style={{marginLeft:"5px",color: "red"}}>You should enter a value</p>
            )}
            <h2 style={{marginLeft:"5px"}}>
                { tasksCount === 0 ? `0/${tasksCount}` : `${doneTasksCount}/${tasksCount}`}
            </h2>
            <div className="tasks-progress-wrapper">
                <div className="tasks-progress" style={
                    {width: tasksCount === 0 ? 
                        `0%` : 
                        `${Math.round(doneTasksCount/tasksCount*100)}%`}
            }>{tasksCount === 0 ? `0%` 
            : `${Math.round(doneTasksCount/tasksCount*100)}%`}</div>
            </div>
        </div>
    )
}

export default Form;