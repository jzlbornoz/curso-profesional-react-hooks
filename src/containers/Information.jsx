import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Information.css'

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-Head">
        <i className="fa-regular fa-circle-user fa-xl" />
          <h2>Informacion de Contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="addres" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>
            <i className="fa-regular fa-circle-left fa-xl" />
            </Link>
          </div>
          <div className="Information-next">
            <Link to='/checkout/payment'>Comprar</Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedidos:</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span> $10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Information };
