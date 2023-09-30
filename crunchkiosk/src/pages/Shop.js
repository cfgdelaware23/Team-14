import "../css/Shop.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Context from "./Context";
import axios from 'axios';

// {
//     vegan = "False",
//     glutenFree = "False",
//     sugarFree = "False",
//     dairyFree = "False",
//     budget = "False",
//     member = "False",
//   }


{/* <div>
        {userData.map((label, index) => (
          <div key={label}>
            {label}: {userData[index]}
          </div>
        ))}
      </div> */}
function Shop() {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const [responseData,setResponseData] = useState([]);

  const [userData, setUserData] = useState([
    "False",
    "FRUIT",
    60,
    "False",
    "False",
    "False",
    "False",
    "False",
  ]);

  const sendDataToBackend = async () => {
    const dataToSend = {
      // boolean membership;
    // FoodCategory category;
    // int budget;
    // boolean glutenFree;
    // boolean dairyFree;
    // boolean vegan;
    // boolean vegetarian;
    // boolean sugarFree;
      membership: userData[0],
      category: userData[1],
      budget: userData[2],
      glutenFree: userData[3],
      dairyFree: userData[4],
      vegan: userData[5],
      vegetarian: userData[6],
      sugarFree: userData[7],
    };
  
    try {
      const response = await axios.post('http://localhost:3000/selection', dataToSend);
      console.log(response.data);
      setResponseData(response.data); // Handle the response from the server
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const goToSelection = () => {
    sendDataToBackend();
    navigate("/selection");
  };

  

  return (
    <>
    <div className="shop-container">
      <div className="shopList">
        <p>Shop</p>
      </div>

      <div className="shopItem" onClick={goToSelection}>
        <Link to="/fruits">Fruits</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious fruits!</p>
      </div>

      <div className="shopItem" onClick={goToSelection}>
        <Link to="/veggies">Veggies</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious vegetables!</p>
      </div>

      <div className="shopItem" onClick={goToSelection}>
        <Link to="/carbs">Carbs</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious carbohydrates, all based off of your dietary restrictions</p>
      </div>

      <div className="shopItem" onClick={goToSelection}>
        <Link to="/proteins">Proteins</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious proteins, all based off of your dietary restrictions</p>
      </div>

      <div className="shopItem" onClick={goToSelection}>
        <Link to="/dairy">Dairy/Al</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious dairy products, all based off of your dietary restrictions</p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Shop;
