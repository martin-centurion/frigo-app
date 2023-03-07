import React, { useRef } from 'react';
import Logo from '../Logo/Logo';
import './styles.css';
import { BsListNested, BsXLg, BsBag } from 'react-icons/bs';

function NavBar() {

  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }  

  return (
        <div className='header'>
            <div className='header__content container'>
                <div className='header__content-logo'>
                    <Logo />
                </div>
                <div className='header__content-menu'>

                    <nav ref={ navRef }>

                        <button>Home</button>
                        <button>Productos</button>
                        <button>Nosotros</button>
                        <button>Contacto</button>
                        <button>
                            <BsBag />
                        </button>
                        <button 
                            className='nav-btn nav-close-btn' 
                            onClick={ showNavBar }>
                            <BsXLg />
                        </button>
                    </nav>
                    <div className='cart'>
                        <button 
                            className='nav-btn' 
                            onClick={ showNavBar }>
                            <BsListNested />
                        </button>
                        <button 
                            className='nav-btn'>
                            <BsBag />
                        </button>
                    </div>  
                </div>
            </div>
        </div>
  );
}

export default NavBar