import { BsBag } from "react-icons/bs";
import cartContext from "../../Context/CartContext";
import { useContext } from "react";

function CartWidget() {
  
  const { cart } = useContext(cartContext);

  const carCount = cart.length;
  
  return (
    
        <button className='cart-widget'>

            <BsBag className='icon'/>
            <span className='cont'> 
                { carCount } 
            </span>

        </button>

  );
}

export default CartWidget;