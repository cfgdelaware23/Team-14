import React, { useState } from 'react';
import sample from "./sample1.json"; 

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
    console.log(items);

    let list = document.getElementById('items');
    for(let i = 0; i < items.length; i++){
        let li = document.createElement('li');
        li.innerText = [items][i];
        list.appendChild(li);
    }

    return (
        <div>
            <p>{category}</p>
                {sample && sample.map(({item, price}) => (<div key = {price}>{item} {price}</div>))}
            <p>goodbye</p>
        </div>
    );
}

export default Selection;
