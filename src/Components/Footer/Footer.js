import React from 'react';
import Logo from '../Logo/Logo';
import './styles.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__content container'>
            <div className='footer__content-logo'>
                <Logo />
            </div>
        </div>
        
    </div>
  )
}

export default Footer