import "../css/Shop.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
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
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  const userData = useContext(Context);

  const goToSelection = () => {
    fetch("http:localhost:8080/selection", {
      method: "POST",
      body: JSON.stringify({
        membership: true,
        category: "FRUIT",
        budget: 50,
        glutenFree: true,
        dairyFree: true,
        vegan: false,
        vegetarian: false,
        sugarFree: false
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(r => console.log(r));
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
