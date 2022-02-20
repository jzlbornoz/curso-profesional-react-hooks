import React from 'react';
import '../style/components/Payment.css';

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido:</h3>
        <div className="Payment-button">
          Pago con PayPal
        </div>
      </div>
      <div className="Payment sidebar">
        sidevar
      </div>
    </div>
  );
};

export { Payment };
