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
      </div>

      <div className="shopItem">
        <Link to="/veggies">Veggies</Link>
      </div>

      <div className="shopItem">
        <Link to="/carbs">Carbs</Link>
      </div>

      <div className="shopItem">
        <Link to="/proteins">Proteins</Link>
      </div>

      <div className="shopItem">
        <Link to="/dairy">Dairy/Al</Link>
      </div>
    </div>
  );
}

export default Shop;
