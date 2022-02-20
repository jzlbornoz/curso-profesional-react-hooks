import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../style/components/Header.css';

const Header = () => {
  const { state } = useContext(AppContext);
  const {cart} = state;
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to='/'>PLATZI CONF STORE</Link>
      </h1>
      <div className="Header-checkout">
        <Link to='checkout'>
          <i className="fas fa-light fa-bag-shopping fa-xl" title='checkout' />
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  );
};

export { Header };
