import React from 'react'
import { ProductItem } from './ProductItem';
import '../style/components/Products.css';

const Products = ({ products }) => {
  return (
    <div className="Products">
        <div className="Products-items">
            {products.map(item => (
                <ProductItem key={item.id} item={item} />
            ))}
        </div>
    </div>
  )
};

export { Products };