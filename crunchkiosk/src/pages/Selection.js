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
            // const response = await fetch({sample});
            // const data = await response.json();
            // setItems(JSON.parse({sample}));
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    return (
        <div>
            <h1>{category}</h1>
            <div className='main'>
                {sample.map(({item, price}) => (<Item itemName={item} itemPrice={price} />))}
            </div>
            <Footer />
        </div>
    );
}

export default Selection;
