import React from 'react';
import { Link } from 'react-router-dom';
import ButtonVerMas from '../Button/ButtonVerMas';
import './styles.css';
function ItemList ( { users }) {
    return (
        <div className='producto__content'>
            {users.map((user) => (
                <div className='producto__content-img' key={user.id}>
                    <img src={user.img} alt={user.title} />
                    <div className='producto__content-title'>
                        <h1>{user.title}</h1>
                        <p>{user.category}</p>
                    </div>
                    <Link to={`/producto/${user.id}`}>
                            <ButtonVerMas>
                                Ver más
                            </ButtonVerMas>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ItemList;