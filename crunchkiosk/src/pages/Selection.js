import React, { useState } from 'react';
import sample from "../sample1.json"; 
import "../css/Selection.css";
import Item from '../components/Item';
import Footer from '../components/Footer';

function Selection() {
    //const [category, setCategory] = useState("");
    const [items, setItems] = useState([]);

    const category = "fruit";

    //setCategory("fruit");


    const fetchData = async () => {
        try {
            const response = await fetch({sample});
            const data = await response.json();
            setItems(JSON.parse({sample}));
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    return (
        <>
        <div className='select-body'>
            <h1>{category}</h1>
            <div className='main'>
                {sample.map(({ item, price }) => (
                    <div className="item-grid">
                        <div className="item-name">{item}</div>
                        <div className="item-price">${parseFloat(price).toFixed(2)}</div>

                        <div className='button-container'>
                        <div className='add-button'>Add</div>
                        <div className='remove-button'>Remove</div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='main'>
                {sample.map(({item, price}) => (<Item itemName={item} itemPrice={price} />))}
            </div> */}
        </div>
            <Footer />
        </>        
    );
}

export default Selection;
