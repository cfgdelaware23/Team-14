import React, { useState } from 'react';
import sample from "../sample1.json"; 
import "../css/Selection.css";
import Item from '../components/Item';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Aos from 'aos';


function Selection() {
    //const [category, setCategory] = useState("");
    const [items, setItems] = useState([]);

    const category = "Fruit";

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
            <div className='main'>
                {sample.map(({ item, price }) => (
                    <div className="item-grid">
                        <div className="item-name">{item.charAt(0).toUpperCase() + item.slice(1)}</div>
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
