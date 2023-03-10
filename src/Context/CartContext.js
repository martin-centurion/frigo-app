import { createContext, useState } from "react";

//1  Crear el context
// 2 Usar el context
// 3 Proveer el context

const cartContext = createContext({
    cart: [],
});

//4 Crear un custom provider

function CartContextProvider(props) {

    const [cart, setCart] = useState([]);

    function addItem(user, count) {
        const newCart = [...cart];
        user.count = count;
        newCart.push(user);
       //newCart.push({...user, count});

        setCart(newCart);
        //setCart([...cart, user])

    }

    //function removeItem(id) {
        /* quitar los items que tengan el id solicitado */

    //}

    //function clear (){
        /* vaciar el carrito */
    //}

    //function getCountInCart () {
        /* reduce */
        //cart.forEach(item=> total + item.count)
        //return total; 
    //}

    return (
        // 5 Pasar la prop value

        <cartContext.Provider value={ { cart: cart, addItem: addItem } }> 
            {props.children} 
        </cartContext.Provider>

        );
}

export { CartContextProvider };

export default cartContext;