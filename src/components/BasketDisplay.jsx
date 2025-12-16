import React from 'react';
import '../App.css';

function BasketDisplay({ basket, addTobasket, removeFromBasket }) {
  return (
    <div className="basketContainer">
      <h3 style={{ fontSize: '24px' }}>Your Shops:</h3>
      {basket.length === 0 && <p>Basket is empty!</p>}
      {basket.map((item) => (
        <div key={item.product.id} style={{ display: 'flex', gap: '10px' }}>
          <span className="item-list">
            {item.product.title} - <strong>Number: </strong>
            {item.count}
          </span>
          <div className="basketButtons">
            <button onClick={() => addTobasket(item.product)}>+</button>
            <button onClick={() => removeFromBasket(item.product.id)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BasketDisplay;
