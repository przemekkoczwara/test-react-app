import React from 'react';

function BasketDisplay({ basket, addTobasket, removeFromBasket }) {
  return (
    <div style={{ border: `1px solid grey`, borderRadius: '5px' }}>
      <h3 style={{ fontSize: '24px' }}>Your Shops:</h3>
      {basket.length === 0 && <p>Basket is empty!</p>}
      {basket.map((item) => (
        <div key={item.product.id} style={{ display: 'flex', gap: '10px' }}>
          <span>
            {item.product.title} - <strong>Number:</strong>
            {item.count}
          </span>
          <div>
            <button onClick={() => addTobasket(item.product)}>+</button>
            <button onClick={() => removeFromBasket(item.product.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BasketDisplay;
