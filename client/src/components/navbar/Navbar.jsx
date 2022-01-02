import './navbar.scss'
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    
    //Seting scroll effect on navbar using useState (ReactHook).

    const [isScrolled, setIsScrolled] = useState(false)
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true)
    
        return () => (window.onscroll = null)
    }
    return (
        <div className= {isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img className='logo' src="/unnamed-removebg-preview.png" alt="" />
                    <Link to='/' className='link'>
                    <span>Home</span>
                    </Link>
                    <Link to='/series' className='link'>
                    <span>Series</span>
                    </Link>
                    <Link to='/movies' className='link'>
                    <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>Kids</span>
                    <Notifications className='icon'/>
                    <img src="/lloyd_img.jpg" alt="" />
                   <div className="profile">
                   <ArrowDropDown className='icon'/>
                   <div className="options">
                       <span>Settings</span>
                       <span>Logout</span>
                   </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
