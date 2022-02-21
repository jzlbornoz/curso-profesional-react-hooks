import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../style/components/Checkout.css'

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = product => {
    removeFromCart(product);
  }

  const HandleSumTotal = () => {
    const reducer = (acumulator, currentValue) => (
      acumulator + currentValue.price
    );
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> :
          <div className="Checkout-empty">
            <h3 className='empty-h3'>Sin pedidos</h3>
            <i className="fa-solid fa-triangle-exclamation fa-2xl" title='Sin pedidos' />
          </div>}
        {cart.map((item) => (
          <div className="Checkout-item" >
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
            <button type='button' className='Checkout-delete' onClick={() => handleRemove(item)}>
              <i className="fa-regular fa-trash-can fa-xl" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h2>{`Precio total: $ ${HandleSumTotal()}`}</h2>
          <button type='button'>
            <Link to='/checkout/information'>Continuar</Link>
          </button>
        </div>
      )}
    </div>
  )
};

export { Checkout };
