import { useState } from 'react';
import ButtonVerMas from '../Button/ButtonVerMas';
import './styles.css';

const ItemCount = ({ initial, stock, onAddToCart }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className='bot'>

        <div className='bot__content'>
          <div className='bot__content-contador'>
                <ButtonVerMas onTouchButton={decrease} >
                    -
                </ButtonVerMas>
                <span className='contador'> {count} </span>
                <ButtonVerMas onTouchButton={increase} >
                    +
                </ButtonVerMas>
          </div>
          <div className='bot__content-bot'>
              <button className='bot_add' onClick={() => onAddToCart(count)}>Comprar</button>
          </div>
            
        </div>

    </div>
  );
};
export default ItemCount;