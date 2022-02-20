import React from 'react'
import '../style/components/Products.css';

const ProductItem = ({ item , handleAddToCart}) => {
  return (
    <div className="Products-item">
      <img src={item.image} alt={item.title} />
      <div className="Product-item-info">
        <h2>{item.title}</h2>
        <span className='Product-price'>${item.price}</span>
        <p>{item.description}</p>
      </div>
      <div>
        <button type='button' className='Product-button' onClick={handleAddToCart(item)}>Comprar</button>
      </div>
    </div>
  )
}

export { ProductItem };