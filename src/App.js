import Form from './components/Form';
import Tasks from './components/Tasks';
import TasksState from './context/TasksState';
function App() {
  return (
    <TasksState>
      <div className="app">
          <Form />
        <div className="container">
          <h2 style={{marginTop:"10px"}}>Todos</h2>
          <Tasks />
        </div>
      </div>
    </TasksState>
  );
}

export default App;
