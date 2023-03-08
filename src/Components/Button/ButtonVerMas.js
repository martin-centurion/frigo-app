import React from 'react';

function ButtonVerMas(props) {
  return (
    <div>
            <button onClick={props.onTouchButton}>
                {props.children}
            </button>
    </div>
  )
}

export default ButtonVerMas;