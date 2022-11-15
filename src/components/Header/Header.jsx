import React from "react";
import { Button } from "@mui/material"; 

import './Header.scss';
import logo from '../../img/logo_can.jpg';

function Header() {
  const openAttention = () => {
    BX.SidePanel.Instance.open(`https://crm.centralnoe.ru/attention/?reqNumber=&dealId=0&source=`, { animationDuration: 300, width: document.getElementById('root').clientWidth })
  }
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <Button
        size="small"
        variant='outlined'
        color='error'
        onClick={openAttention}
      >
        сообщить о проблеме
      </Button>
    </header>)
}

export default Header;