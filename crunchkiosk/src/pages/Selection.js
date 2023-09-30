import React, { useState } from 'react';
import sample from "../sample1.json"; 
import "../css/Selection.css";
import Item from '../components/Item';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import axios from 'axios';
import item from "../components/Item";


function Selection() {
    //const [category, setCategory] = useState("");
    const [items, setItems] = useState([]);

    const category = "Fruit";

    //setCategory("fruit");

    const [userData,setUserData] = useState([
        "False",
        "FRUIT",
        60,
        "False",
        "False",
        "False",
        "False",
        "False",
    ]);
    const fetchData = async () => {
    const dataToSend = {
        membership: userData[0],
        category: userData[1],
        budget: userData[2],
        glutenFree: userData[3],
        dairyFree: userData[4],
        vegan: userData[5],
        vegetarian: userData[6],
        sugarFree: userData[7],
    };

        try{
            const response = await axios.post('http://localhost:8080/selection',dataToSend);
            setItems(response.data);
            // console.log(response.data);
        }catch(error){
            console.log(error);
            console.error("error sending data", error);
        }
        // try {
        //     const response = await fetch({sample});
        //     const data = await response.json();
        //     setItems(JSON.parse({sample}));
        //
        // } catch (error) {
        //     console.error('Error fetching data:', error);
        // }
    };

    fetchData();

    // variable that keeps track of the user's window size width and height
    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    // listener that constantly updates the window size variables when user changes it
    const updateDimensions = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    // useEffect function runs once directly when page loads
    useEffect(() => {
        //  Initializing AnimateOnScroll, tweak this function to change animation duration and delay
        Aos.init({
            once: 'true',
            duration: 1000,
            delay: 200
        });

        //  Scroll to top of page when page loads
        window.scrollTo(0, 0);

        //  Adding event listener to window to update window size variables
        window.addEventListener("resize", updateDimensions);

        //  Removing event listener when component unmounts
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <>
        <div className='select-body'>
            <h1>{category}</h1>
            {/*{console.log("!!!!")}*/}
            <div className='main'>
                {console.log(items[0])}
                {items.map((item) => (
                    <div className="item-grid">
                        {/*<div className="item-name">{item.charAt(0).toUpperCase() + item.slice(1)}</div>*/}
                        {/*<div className="item-price">${parseFloat(price).toFixed(2)}</div>*/}
                        <div className="item-name">{item.name}</div>
                        <div className="item-price">${parseFloat(item.price).toFixed(2)}</div>
                        <div className='button-container'>
                        <div className='add-button'>Add</div>
                        <div className='remove-button'>Remove</div>
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
