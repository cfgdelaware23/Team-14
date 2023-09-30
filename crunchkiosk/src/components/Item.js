import React, { useState } from 'react';
import '../css/Item.css';

function Item({ item, index, total, setTotal, onQuantityChange }) {
  const [quantity, setQuantity] = useState(item[2]);

  const updateQuantity = (amt) => {
    const newQuantity = quantity + amt;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      item[2] = newQuantity; // Update the item's quantity in the parent component if necessary.
    }
    onQuantityChange();
  };

  const handleSubtract = () => {
    updateQuantity(-1);
  };

  const handleAdd = () => {
    updateQuantity(1);
  };

  return (
    <div className="item" key={index}>
      <div className="item-name">{item[0]}</div>
      <div className="item-price">${(item[1] * quantity).toFixed(2)}</div>
      <div>
        <div className='remove-button' onClick={handleAdd}>+</div>
        <div className="item-quantity">Quantity: {quantity}</div>
        <div className='add-button' onClick={handleSubtract}>-</div>
      </div>
    </div>
  );
}

export default Item;
