import React from "react";
import "../css/Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "../components/Footer";
import Shop from "./Shop";
import Context from "./Context";

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

  return (
    <Context.Provider
      value={[
        vegan,
        vegetarian,
        glutenFree,
        sugarFree,
        dairyFree,
        budget,
        member,
      ]}
    >
      <>
        <br />
        <h1>Welcome to Crunch Kiosk!</h1>
        <p>Please fill out the following form to see available groceries:</p>
        <div className="cardContainer">
        <div class="card w-75">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Button
            </a>
          </div>
        </div>
        </div>
        <div className="pricing_budget">
          <div className="pricingTitle">Pricing Tier:</div>
          <div className="pricingSelect">
            <select onChange={(e) => setMember(e.value)}>
              <option value="tier1">Member</option>
              <option value="tier2">Non-Member</option>
            </select>
          </div>
          <div className="budgetTitle">Budget:</div>
          <input
            className="budgetVal"
            placeholder="$ Budget"
            type="text"
            onChange={(e) => {
              setBudget(e.currentTarget.value);
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
                  if (vegan === "vegan") setVegan("");
                  else setVegan("vegan");
                }}
              />
              <br></br>
              <label for="vegetarian">Vegetarian</label>
              <input
                type="checkbox"
                checked={vegetarian === "vegetarian"}
                onChange={() => {
                  if (vegetarian === "vegetarian") setVegetarian("");
                  else setVegetarian("vegetarian");
                }}
              />
              <br></br>
              <label for="dairy">Dairy Free</label>
              <input
                type="checkbox"
                checked={dairyFree === "dairyFree"}
                onChange={() => {
                  if (dairyFree === "dairyFree") setDairyFree("");
                  else setDairyFree("dairyFree");
                }}
              />
              <br></br>
              <label for="glutenFree">Gluten Free</label>
              <input
                type="checkbox"
                checked={glutenFree === "glutenFree"}
                onChange={() => {
                  if (glutenFree === "glutenFree") setGlutenFree("");
                  else setGlutenFree("glutenFree");
                }}
              />

              <br></br>
              <label for="sugarFree">Sugar Free</label>
              <input
                type="checkbox"
                checked={sugarFree === "sugarFree"}
                onChange={() => {
                  if (sugarFree === "sugarFree") setSugarFree("");
                  else setSugarFree("sugarFree");
                }}
              />
            </div>
          </div>
          <div className="bottom">
            <Link className="linked" to="/shop">
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

export default Home;
