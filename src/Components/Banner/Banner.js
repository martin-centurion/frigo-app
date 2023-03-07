import React from 'react';
import './styles.css';
import { BsArrowRight } from 'react-icons/bs';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner__content'>
            <div className='banner__content-img'>
                <img src='./img/tomahawk.png' alt='Tomahawk'/>
            </div>
            <div className='banner__content-title'>
                <h1>Tomahawk</h1>
                <p>El tomahawk es un corte tradicional americano. Es ideal para hacer a la parrilla.</p>
                <button>Ver más <BsArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Banner