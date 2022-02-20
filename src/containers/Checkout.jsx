import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Checkout.css'

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>Product Name</h4>
            <span>$124</span>
          </div>
          <button type='button' className='Checkout-delete'>
            <i className="fa-regular fa-trash-can fa-xl" />
          </button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h2>Precio total: $124</h2>
        <button type='button'>
          <Link to='/checkout/information'>Continuar</Link>
        </button>
      </div>
    </div>
  )
};

export { Checkout };
