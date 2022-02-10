import React from "react";

import './Header.css';
import logo from '../../img/logo_can.jpg';

function Header () {
  return(
    <header className="header">
      <img src={logo} alt="logo" className="logo"/>
    </header>)
}

export default Header;