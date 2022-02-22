import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext';
import '../style/components/Payment.css';

const Payment = () => {
  const {state} = useContext(AppContext);
  const {cart} = state
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
          PAYPAL
        </div>
        <div className="Payment-button2">
          Credit Card
        </div>
      </div>
      <div className="Payment sidebar">
        Gracias por elegirnos
      </div>
    </div>
  );
};

export { Payment };
