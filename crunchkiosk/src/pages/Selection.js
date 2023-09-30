import React, { useState } from 'react';
import "../css/Selection.css";
import Footer from '../components/Footer';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function Selection() {
    //const [category, setCategory] = useState("");
    const location = useLocation();

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState(location.state[7]);
    const [cart, setCart] = useState([]);

    

    const [userData,setUserData] = useState(location.state);

    

    // console.log(userData);

    const fetchData = async () => {
    const dataToSend = {
        membership: userData[0],
        category: userData[7],
        budget: userData[1],
        glutenFree: userData[2],
        dairyFree: userData[3],
        vegan: userData[4],
        vegetarian: userData[5],
        sugarFree: userData[6],
    };

        try{
            const response = await axios.post('http://localhost:8080/selection',dataToSend);
            setItems(response.data);
            // console.log(response.data);
        }catch(error){
            console.log(error);
            console.error("error sending data", error);
        }
        
    };

    fetchData();

    const addToCart = () => {
        console.log("add to cart");
    };

    const removeFromCart = () => {
        console.log("remove from cart");
    };


    

    return (
        <>
        <div className='select-body'>
            <h1 className='cat'>{category}</h1>
            {/*{console.log("!!!!")}*/}
            <div className='main'>
                {/* {console.log(items[0])} */}
                {items.map((item) => (
                    <div className="item-grid">
                        {/*<div className="item-name">{item.charAt(0).toUpperCase() + item.slice(1)}</div>*/}
                        {/*<div className="item-price">${parseFloat(price).toFixed(2)}</div>*/}
                        <div className="item-name">{item.name}</div>
                        <div className="item-price">${parseFloat(item.price).toFixed(2)}</div>
                        <div className='button-container'>
                        <div className='add-button' onClick={addToCart}>Add</div>
                        <div className='remove-button' onClick={removeFromCart}>Remove</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <Footer />
        </>        
    );
}

export default Selection;
