import React from 'react'
import '../css/CartBox.css'
import Item from './Item';
function CartBox() {
    const myCart = [
        ["apple",1.00,2], ["sourdough",2.35,1]
    ];


    return(
        <div className="box">
            {myCart.map((item) => (
                <Item itemName={item[0]} itemPrice={item[1]} itemQuantity={item[2]}/>
            ))}
        </div>
    );
}

export default CartBox;