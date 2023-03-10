import React, { useRef } from 'react';
import './styles.css';
import { BsListNested, BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {

  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }  

  return (
        <div className='header'>
            <div className='header__content container'>
                <div className='header__content-logo'>
                    <Link to="/">
                        <img src="./img/logo-app-60.png" alt="Logo App" />
                    </Link> 
                </div>
                <div className='header__content-menu'>

                    <nav ref={ navRef }>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                        <Link to="/category/ternera">
                            <button>Ternera</button>
                        </Link>
                        <Link to="/category/cerdo">
                            <button>Cerdo</button>
                        </Link>
                        <Link to="/category/achura">
                            <button>Achuras</button>
                        </Link>

                        <Link to="/category/ave">
                            <button>Ave</button>
                        </Link>
                            <CartWidget />

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
                    </div>  
                </div>
            </div>
        </div>
  );
}

export default NavBar