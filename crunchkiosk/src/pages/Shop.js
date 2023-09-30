import "../css/Shop.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Context from "./Context";

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
  const [total, setTotal] = useState(0);

  const userData = useContext(Context);

  return (
    
    <div className="shop-container">
      <div className="shopList">
        <p>Shop</p>
      </div>

      <div className="shopItem">
        <Link to="/fruits">Fruits</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious fruits!</p>
      </div>

      <div className="shopItem">
        <Link to="/veggies">Veggies</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious vegetables!</p>
      </div>

      <div className="shopItem">
        <Link to="/carbs">Carbs</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious carbohydrates, all based off of your dietary restrictions</p>
      </div>

      <div className="shopItem">
        <Link to="/proteins">Proteins</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious proteins, all based off of your dietary restrictions</p>
      </div>

      <div className="shopItem">
        <Link to="/dairy">Dairy/Al</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious dairy products, all based off of your dietary restrictions</p>
      </div>
    </div>
  );
}

export default Shop;
