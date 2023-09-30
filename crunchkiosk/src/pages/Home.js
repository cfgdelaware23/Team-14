import React from "react";
import "../css/Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

//node -r node-localstorage/register Home.js

import Footer from "../components/Footer";
import Shop from "./Shop";
import Context from "./Context";

var Data = {
  member: false,
  category: "",
  gluten_free: false,
  dairy_free: false,
  vegan: false,
  vegetarian: false,
  sugar_free: false
};



const Home = () => {
  const [vegan, setVegan] = useState("");
  const [vegetarian, setVegetarian] = useState("");
  const [glutenFree, setGlutenFree] = useState("");
  const [sugarFree, setSugarFree] = useState("");
  const [dairyFree, setDairyFree] = useState("");
  const [budget, setBudget] = useState("");
  // const [member, setMember] = useState("tier1");
  const [member, setMember] = useState(false);

  // const handleMember = (val) => {
  //   console.log(val);

  //   if(val === "Member"){
  //     setMember(true);
  //   } else {
  //     setMember(false);
  //   }
  // }
  //                            member  cat gf  dairyfree   v     ve    sugarfree


  function change(key, value){
    Data.key = value;
    console.log(key + " " + Data.key);
  }

  return (

    <Context.Provider
      value={[vegan, vegetarian, glutenFree, sugarFree, dairyFree, budget, member]}
    >
      <>
      <div className="BACKGROUND"/>
        <div className="pricing_budget">
          <div className="pricingTitle">Pricing Tier:</div>

          <div className="pricingSelect">
            <select onChange={(e) => {
                if(member === "tier1"){
                  setMember("tier2");
                  change('member', false);
                }
                else{
                  setMember("tier1");
                  change('member', true);
                }
              }}>
              <option value="tier2">Non-Member</option>
              <option value="tier1">Member</option>

            </select>
          </div>

          <div className="budgetTitle">Budget:</div>
          <input
            className="budgetVal"
            placeholder="$ Budget"
            type="text"
            onChange={(e) => {
              setBudget(e.currentTarget.value);
              change("budget", parseInt(e.currentTarget.value));
            }}
            value={budget}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <div className="shopLink box">
            {/* sugar freee vegan gluten free */}
            {/* change value to be what db name col is */}

            <header> Dietary Restrictions</header>
            <div className="">
              <br></br>
              <label for="vegan">Vegan</label>
              <input
                type="checkbox"
                checked={vegan === "vegan"}
                onChange={() => {
                  if(vegan === "vegan"){
                    setVegan("");
                    change("vegan", false);
                  }
                  else{
                    setVegan("vegan");
                    change("vegan", true);
                  }
                }}
              />
              <br></br>
              <label for="vegetarian">Vegetarian</label>
              <input
                type="checkbox"
                checked={vegetarian === "vegetarian"}
                onChange={() => {
                  if(vegetarian === "vegetarian"){
                    setVegetarian("");
                    change("vegetarian", false);
                  }
                  else{
                    setVegetarian("vegetarian");
                    change("vegetarian", true);
                  }
                }}
              />
              <br></br>
              <label for="dairy">Dairy Free</label>
              <input
                type="checkbox"
                checked={dairyFree === "dairyFree"}
                onChange={() => {
                  if(dairyFree === "dairyFree"){
                    setDairyFree("");
                    change("dairy_free", false);
                  }
                  else{
                    setDairyFree("dairyFree");
                    change("dairy_free", true);
                  }
                }}
              />
              <br></br>
              <label for="glutenFree">Gluten Free</label>
              <input
                type="checkbox"
                checked={glutenFree === "glutenFree"}
                onChange={() => {
                  if(glutenFree === "glutenFree"){
                    setGlutenFree("");
                    change("gluten_free", false);
                  }
                  else{
                    setGlutenFree("glutenFree");
                    change("gluten_free", true);
                  }
                }}
              />

              <br></br>
              <label for="sugarFree">Sugar Free</label>
              <input
                type="checkbox"
                checked={sugarFree === "sugarFree"}
                onChange={() => {
                  if(sugarFree === "sugarFree"){
                    setSugarFree("");
                    change("sugar_free", false);
                  }
                  else{
                    setSugarFree("sugarFree");
                    change("sugar_free", true);
                  }
                }}
              />
            </div>
          </div>
          <div className="bottom">
            <Link className='linked' to="/shop">
              {/* <Shop
              vegan={vegan}
              glutenFree={glutenFree}
              sugarFree={sugarFree}
              dairyFree={dairyFree}
              budget={budget}
              member={member}
            /> */}
              {/*  supposed to render new component with prop passed not sure how to do this */}
              SHOP
              
            </Link>
          </div>
        </div>
      </>
    </Context.Provider>

  );
};

export {Data, Home};
