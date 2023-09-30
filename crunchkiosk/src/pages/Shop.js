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
//   const {test} = route.params;
//   console.log(test)
//   const [total, setTotal] = useState(0);

//   const userData = useContext(Context);

  const goToSelection = () => {
    // fetch('https://example.com/api/v1/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         title: 'My new post',
    //         body: 'This is my new post.'
    //     })
    //     });
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
