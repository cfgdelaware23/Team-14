import "../css/Shop.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Context from "./Context";
import {useLocation} from 'react-router-dom';

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
  const location = useLocation();


  console.log(location.state);
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    // Access location.state here once it's properly initialized
    setHomeData(location.state || []);
  }, [location.state]);


  /* homeData:
  0: vegan
  1: vegetarian
  2: glutenFree
  3: sugarFree
  4: dairyFree
  5: budget
  6: member
  */
  const goToSelection = (category) => {

    navigate("/selection", {state: [...homeData,category]});

  };


  return (
    <>
    <div className="shop-container">
      <div className="shopList">
        <p>Shop</p>
      </div>

      <div className="shopItem" onClick={() => goToSelection("FRUIT")}>
        <Link to="/selection">Fruits</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious fruits!</p>
      </div>

      <div className="shopItem" onClick={() => goToSelection("VEGETABLE")}>
        <Link to="/selection">Veggies</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious vegetables!</p>
      </div>

      <div className="shopItem" onClick={ () => goToSelection("CARBOHYDRATE")}>
        <Link to="/selection">Carbs</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious carbohydrates, all based off of your dietary restrictions</p>
      </div>

      <div className="shopItem" onClick={ () => goToSelection("PROTEIN")}>
        <Link to="/selection">Proteins</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious proteins, all based off of your dietary restrictions</p>
      </div>

      <div className="shopItem" onClick={() => goToSelection("DAIRY")}>
        <Link to="/selection">Dairy/Al</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy and nutritious dairy products, all based off of your dietary restrictions</p>
      </div>

      <div className="shopItem" onClick={() => goToSelection("BEVERAGE")}>
        <Link to="/selection">Beverage</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy, tasty, and nutritious beverages, taking into account your dietary restrictions.</p>
      </div>

      <div className="shopItem" onClick={ () => goToSelection("SNACK")}>
        <Link to="/selection">Snacks</Link>
        <br></br>
        <br></br>
        <p className="subtitle">Choose from a selection of healthy, tasty, and nutritious snacks, taking into account your dietary restrictions.</p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Shop;
