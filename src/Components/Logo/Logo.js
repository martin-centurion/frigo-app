import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img src='./img/logo-app-60.png' alt='Logo App' />
    </Link>
    
  )
}

export default Logo;