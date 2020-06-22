import React from 'react';

import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

//let s = {
 // 'nav': "Navbar_nav__XrbAI",
  //'item':"Navbar_item__3fuU0"
//}


const Navbar = () => {
    return  <nav className= {s.nav}>
    <div className = {s.item}> 
      <NavLink to ="/profile" activeClassName = {s.activeLink}>Profile</NavLink>
      </div>
    <div className = {s.item}> 
      <NavLink to ="/dialogs" activeClassName = {s.activeLink} >dialogs</NavLink>
      </div>
    <div className = {s.item}> 
      <NavLink to ="/news" activeClassName = {s.activeLink} >news</NavLink>
      </div>
    <div className = {s.item}> 
      <NavLink to ="/misic" activeClassName = {s.activeLink} >music</NavLink>
      </div>
    <div className ={s.item}>
       <NavLink to ="/settings" activeClassName = {s.activeLink} >settings</NavLink>
       </div>
  </nav>
}

export default Navbar;