import './App.css';
import Home from './Home/Home'
import Signup from './SignUp/Signup';
import Login from './Login/Login';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="container-fluid p-0 m-0">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
 
      </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
