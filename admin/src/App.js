import Sidebar from './components/siderbar/Sidebar';
import Topbar from "./components/topbar/Topbar";
import './app.css';
import Home from './components/pages/home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Userlist from './components/pages/UserList/Userlist';
import User from './components/pages/User/user';
import NewUser from './components/pages/newUser/newUser';
import ProductList from './components/pages/Products/productList';


function App() {
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

        <Route path = '/newproducts' element={ <ProductList/>}>
        </Route>
  
        </Routes>
      </div>
      
      </div>
     
    </Router>
  );
}

export default App;
