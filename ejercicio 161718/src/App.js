import './App.css';
import TaskContainer from "./components/container/taskContainer"
import { Route, Routes, Link, BrowserRouter,Navigate} from "react-router-dom"
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ErrorPage from './Pages/NotFoundPage';

function App() {

  let isLogged = true;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLogged ?  <TaskContainer/>: <Navigate to="/login" />}/>

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />


          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
