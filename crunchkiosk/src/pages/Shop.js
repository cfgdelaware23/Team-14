import "../css/Shop.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./Context";
import { useContext } from "react";
const {Data} = require('./Home.js');

// {
//     vegan = "False",
//     glutenFree = "False",
//     sugarFree = "False",
//     dairyFree = "False",
//     budget = "False",
//     member = "False",
//   }

const Shop = () => {
  const [stuff, setStuff] = useState();
  const userData = useContext(Context);

  //this is the code to api will be called when we click link to Selection

  console.log(Data);
  // let a = ['member', 'budget', 'gluten_free', 'dairy_free', 'vegan', 'vegetarian', 'sugar_free', 'category']
  // for(let i = 0; i<a.length; i++){
  //   console.log(props)
  // }



  return (
    <>

      <div className="shopList">
        <p>Shop</p>
      </div>

      <div className="shopItem">
        <Link>Fruits</Link>
      </div>
      <br></br>
      <div className="shopItem">
        <Link>Veggies</Link>
      </div>
      <br></br>
      <div className="shopItem">
        <Link>Carbs</Link>
      </div>
      <br></br>
      <div className="shopItem">
        <Link>Proteins</Link>
      </div>
      <br></br>
      <div className="shopItem">
        <Link>Dairy/Al</Link>
      </div>
    </>
  );
}

export default Shop;
