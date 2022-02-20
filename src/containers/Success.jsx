import React from 'react';
import '../style/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por su compra</h2>
        <span>Tu pedido llegara en tres dias a tu direccion</span>
        <div className="Success-map">
          Google Maps
        </div>
      </div>
    </div>
  );
};

export { Success };
