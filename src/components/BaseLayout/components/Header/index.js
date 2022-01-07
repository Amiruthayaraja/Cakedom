//Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">CakeDOM</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/women">Wedding Cakes</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/men">Birthday Cakes</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/clothes">Anniversary Cakes</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/accessories">Special Event Cakes</NavLink></p>
    </div>
  </div>
)

export default Header;
