import Sidebar from './components/siderbar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from './components/pages/home/Home';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Userlist from './components/pages/UserList/Userlist';
import User from './components/pages/User/user';
import NewUser from './components/pages/newUser/newUser';
import ProductList from './components/pages/Productlist/productList';
import Login from './components/pages/login/Login'
import {AuthContext} from './components/context/authContext/AuthContext'
import { useContext } from 'react'
import Product from './components/pages/product/Product';
import Newproduct from './components/pages/newproduct/Newproduct';


function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <div>
      <Topbar/>
      </div>
     
      <div className = 'container'>
      <Sidebar/>
      <div className = 'home'>
        <Routes>
        <Route exact path= '/' element={ <Home/>}>
        </Route>

        <Route path= '/login' element={ user ? <Navigate to='/'/> : <Login/>}>
          {user && <>
           <Route path = '/users' element={ <Userlist/>}>
           </Route>
   
           <Route path = '/user/:userId' element={ <User/>}>
           </Route>
   
           <Route path = '/newuser' element={ <NewUser/>}>
           </Route>
   
           <Route path = '/movies' element={ <ProductList/>}>
           </Route>
   
           <Route path = '/products/:productsId' element={ <ProductList/>}>
           </Route>
   
           <Route path = '/product/:productId' element={ <Product/>}>
           </Route>
   

           <Route path = '/newproducts' element={ <Newproduct/>}>
           </Route>  </> }
        </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
