import React from 'react'
import '../css/CartBox.css'
import Item from './Item';
function CartBox() {
    return(
        <div className="box">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}

export default CartBox;