import logo from './logo.svg';
import './App.css';
import Registrationcomponent from './component1/registrationcomponent';
import FeedbackComponent from './component1/feedback1';
import { Link, Route, Routes } from 'react-router-dom';
import DeleteComponent from './component/delete';
import UpdateComponent from './component/update';
import RegisterFunctionComponent from './functionalcomponent/register';
import MyRegisterComponent from './functionalcomponent1/register2';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to = "/register">Register</Link> &nbsp; &nbsp;
        <Link to = "/feedback">Feedback</Link>

      </nav>

      <Routes>
        <Route path = "/register" element = {<MyRegisterComponent></MyRegisterComponent>}></Route>
        <Route path = "/feedback" element = {<FeedbackComponent myname="Ravi"></FeedbackComponent>}></Route>
        <Route path = "/update/:id" element = {<UpdateComponent></UpdateComponent>}></Route>
        <Route path = "*" element = {<h1>Under Construction</h1>}></Route>
      </Routes>

     
    
    </div>
  );
}

export default App;
