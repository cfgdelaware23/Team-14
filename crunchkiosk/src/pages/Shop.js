import "../css/Shop.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Shop({
  vegan = "False",
  glutenFree = "False",
  sugarFree = "False",
  dairyFree = "False",
  budget = "False",
  member = "False",
}) {
  const [stuff, setStuff] = useState();

  //this is the code to api will be called when we click link to Selection

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
