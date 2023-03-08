import React from 'react';
import './styles.css';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner__content container'>
            <div className='banner__content-img'>
                <img src='./img/tomahawk.png' alt='Tomahawk'/>
            </div>
            <div className='banner__content-title'>
                <h1>Tomahawk</h1>
                <p>El tomahawk es un corte tradicional americano. Es ideal para hacer a la parrilla.</p>
                <Link to='/producto/1'>
                     <button>
                        Ver más 
                      <BsArrowRight />
                      </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner