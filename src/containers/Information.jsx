import React, { useContext, useRef } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Empty } from '../components/Empty';
import '../style/components/Information.css'

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-Head">
          <i className="fa-regular fa-circle-user fa-xl" />
          <h2>Informacion de Contacto</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
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
            <button type='button' onClick={handleSubmit}>Comprar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>{cart.length > 0 ? <h3>Pedidos:</h3> : <Empty />}</h3>
        {cart.map(item => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Information };
