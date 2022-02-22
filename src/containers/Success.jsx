import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Map } from '../components/Map';
import '../style/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por su compra</h2>
        <span>Tu pedido llegara en tres dias a tu direccion</span>
        <div className="Success-map">
         <Map />
        </div>
      </div>
    </div>
  );
};

export { Success };
