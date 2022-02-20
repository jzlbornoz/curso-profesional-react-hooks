import React from 'react';
import { Link } from 'react-router-dom';
import '../style/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to='/'>PLATZI CONF STORE</Link>
      </h1>
      <div className="Header-checkout">
        <Link to='checkout'>
        <i className="fas fa-light fa-bag-shopping fa-xl" title='checkout' />
          </Link>
      </div>
    </div>
  );
};

export { Header };
