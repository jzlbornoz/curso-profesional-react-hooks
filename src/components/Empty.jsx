import React from 'react';

const Empty = () => {
    return (
        <div className="Checkout-empty">
            <h3 className='empty-h3'>Sin pedidos</h3>
            <i className="fa-solid fa-triangle-exclamation fa-2xl" title='Sin pedidos' />
        </div>
    )
}

export { Empty };