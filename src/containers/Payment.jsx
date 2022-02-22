import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../context/AppContext';
import '../style/components/Payment.css';

const Payment = () => {
  const {state} = useContext(AppContext);
  const {cart , buyer} = state
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido:</h3>
        {cart.map(item =>(
          <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>{`$ ${item.price}`}</span>
              </div>
          </div>
        )) }
        <div className="Payment-button">
          <Link to='/checkout/success'> <p>PAYPAL</p> </Link>
        </div>
        <div className="Payment-button2">
        <Link to='/checkout/success'> <p>Credit card</p> </Link>
        </div>
      </div>
      <div className="Payment sidebar">
        Gracias por elegirnos
      </div>
    </div>
  );
};

export { Payment };
