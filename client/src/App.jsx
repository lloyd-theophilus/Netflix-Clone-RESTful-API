import './app.scss'
import Home from "./pages/home/Home";
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";



function App() {
  /*If it is user, then they can access the pages but if it is not a user, then they will be directed to the register page*/
  const user = true;
  return (
    <Router>
      <Routes>
      <Route exact path= '/' element={user ? <Home/> : <Navigate to='/register'/>}>
      </Route>

      <Route path = '/register' element={!user ? <Register/> : <Navigate to='/'/>}>
      </Route>

      <Route path = 'login' element={!user ? <Login/> : <Navigate to='/'/>}>
      </Route>
      { user && (  /* When using multiple component, usien react fragment ~~~~ If it is a user, they should view this pages below*/ 
        <>
        <Route path = '/movies' element={ <Home type='movies'/>}>
        </Route>
  
        <Route path = '/series' element={ <Home type='series'/>}>
        </Route>
  
        <Route path = '/watch' element={ <Watch/>}>
        </Route>
      </>
      )
      }
      </Routes>
  </Router>
  );
}

export default App;
