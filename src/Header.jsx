import React from 'react';
import logo from './Images/white_small_300.png'

const Header = () => {
  return <><div className="header">
  <img src={logo} alt="logo" width='70' height='70'/>
  <h1 style={{paddingLeft: 0.5+'em'}}>Keep App</h1>
  </div></>;
};
export default Header;