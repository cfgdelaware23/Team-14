import React from 'react';
import '../css/CartBox.css';
import Item from './Item';
import { useState } from 'react';

function CartBox() {
  const myCart = [
    ['apple', 1.00, 2],
    ['sourdough', 2.35, 1],
    ['plant-based yoghurt', 1.20, 2],
    ['mango', 1.10, 4],
    ['sweet potato', 1.50, 2],
    ['chicken breast', 2.50, 3]
  ];

  const [total, setTotal] = useState(0);

  //TEMPORARY TOTAL
  const calculateTotal = () => {
    let total = 0;
    myCart.forEach((item) => {
      total += item[1] * item[2];
    });
    return total.toFixed(2);
  };

  return (
    <div className="box">
      {myCart.map((item, index) => (
        <Item item={item} index={index} total={total} setTotal={setTotal}/>
      ))}
      <div className="total">Total: ${calculateTotal()}</div>
      <button className="checkout-button">Print Shoplist</button>
    </div>
  );
}

export default CartBox;