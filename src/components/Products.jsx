import React, { useContext } from 'react'
import { ProductItem } from './ProductItem';
import { AppContext } from '../context/AppContext';
import '../style/components/Products.css';

const Products = () => {
  const {state, addToCart} = useContext(AppContext);
  const { products } = state;
  const handleAddToCart = product => () => {
    addToCart(product);
  }
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(item => (
          <ProductItem key={item.id} item={item} handleAddToCart={handleAddToCart} />  
        ))}
      </div>
    </div>
  )
};

export { Products };