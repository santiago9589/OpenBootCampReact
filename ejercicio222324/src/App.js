import './App.css';
import TaskContainer from "../src/store/components/container/taskContainer"
import FormTaskContainer from "../src/store/components/container/formContainer"
import FilterOptions from './store/components/pure/filterOptions';
function App() {
  return (
    <div className="App">
      <TaskContainer></TaskContainer>
      <FormTaskContainer></FormTaskContainer>
      <FilterOptions></FilterOptions>
    </div>
  );
}

export default App;
