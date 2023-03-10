import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import products from "../products/products";
import { useContext } from "react";
import cartContext from "../../Context/CartContext";
import './styles.css';

function getSingleItemFromDatabase(idItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let encontrado = products.find((item) => item.id === Number(idItem));
            resolve(encontrado);
        }, 1000)
    });
}


function ItemDetailContainer() {
    const [user, setUsers] = useState({});
    
    const params = useParams();
    const idUser = params.idUser;

    
    useEffect(() => {
        getSingleItemFromDatabase(idUser).then((respuesta) => {
            setUsers(respuesta);
        });
    }, [idUser]);
    
    
    const { addItem } = useContext(cartContext);
    
    function onAddToCart(count) {
        alert(`Agregaste ${count} items al carrito`);
        addItem([user, count]);
        
      }

    return (
        <div className='detail container'>
        <div className='detail__content'>
                <div className='detail__content-img' key={user.id}>
                    
                    <div className='img-movil'>
                        <img src={user.img500} alt={user.title} />
                    </div>
                    
                    <div className='detail__content-title'>
                        <h1>{user.title}</h1>
                        <h4>{user.description}</h4>
                        <p>$ {user.price}</p>
                        <p className='stock'>Stock Disponible: {user.stock} Kg.</p>
                    
                        <ItemCount
                             onAddToCart={onAddToCart}
                             initial={1}
                             stock={user.stock}
                        />
                    </div>
                    
        
                </div>
        </div>
        </div>
    )
}

export default ItemDetailContainer;