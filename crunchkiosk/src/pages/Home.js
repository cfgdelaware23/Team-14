import React from "react";
import "../css/Home.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Context from "./Context";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [sugarFree, setSugarFree] = useState(false);
  const [dairyFree, setDairyFree] = useState(false);
  const [budget, setBudget] = useState(0);
  const [member, setMember] = useState(false);
  const ANIMALS = ["Yes", "No"];

  const navigate = useNavigate();
  const location = useLocation();

  // const handleMember = (val) => {
  //   console.log(val);
  //   if (val === "Member") {
  //     setMember(true);
  //   } else {
  //     setMember(false);
  //   }
  // };

  const goToShop = (test) => {
    let tempMemb = false;
    if(member === "Yes"){
      tempMemb = true;
    }else{
      tempMemb = false;
    }
    const info = [tempMemb, budget, glutenFree, dairyFree, vegan, vegetarian, sugarFree];
    navigate("/shop", {state: info});
  };

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
        <div className="pricingTitle">Welcome to Crunch Kiosk!</div>
        <div className = 'instructions'>Please fill out the following form to see available groceries:</div>
        <div className="pricing_budget">
          <div className="smallerTitle">Membership Status:</div>
          <div className="pricingSelect">
            {/* <select onSelect={(e) => handleMember(e.value)}>
              <option value="tier1">Member</option>
              <option value="tier2">Non-Member</option>
            </select> */}
            <label htmlFor="animal">
              Do you have a membership with The Better Store?
                <br/>
              <select
                id="animal"
                value={member}
                onChange={(e) => {
                  setMember(e.target.value);
                  // setBreed("");
                }}
                onBlur={(e) => {
                  setMember(e.target.value);
                  // setBreed("");
                }}
              >
                <option />
                {ANIMALS.map((animal) => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                ))}
              </select>
            </label>
          </div>
            <br/>
          <div className="smallerTitle">Budget:</div>
            <p>Please specify the budget you are shopping with today (if applicable)</p>
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
          <div className="shopLink box2">
            {/* sugar freee vegan gluten free */}
            {/* change value to be what db name col is */}

            <header> Dietary Restrictions</header>
              <p>Please check the boxes which match your dietary restrictions:</p>
            <div className="">
              <label for="vegan">Vegan</label>
              <input
                type="checkbox"
                checked={vegan === true}
                onChange={() => {
                  if (vegan === true) setVegan(false);
                  else setVegan(true);
                }}
              />
              <br></br>
              <label for="vegetarian">Vegetarian</label>
              <input
                type="checkbox"
                checked={vegetarian === true}
                onChange={() => {
                  if (vegetarian === true) setVegetarian(false);
                  else setVegetarian(true);
                }}
              />
              <br></br>
              <label for="dairy">Dairy Free</label>
              <input
                type="checkbox"
                checked={dairyFree === true}
                onChange={() => {
                  if (dairyFree === true) setDairyFree(false);
                  else setDairyFree(true);
                }}
              />
              <br></br>
              <label for="glutenFree">Gluten Free</label>
              <input
                type="checkbox"
                checked={glutenFree === true}
                onChange={() => {
                  if (glutenFree === true) setGlutenFree(false);
                  else setGlutenFree(true);
                }}
              />
                <br></br>
                <label for="sugarFree">Sugar Free</label>
              <input
                type="checkbox"
                checked={sugarFree === true}
                onChange={() => {
                  if (sugarFree === true) setSugarFree(false);
                  else setSugarFree(true);
                }}
              />
            </div>
          </div>
          <div className="bottom linked" onClick={() => goToShop()}>
            SHOP
          </div>
        </div>
          <br/>
      </>
    </Context.Provider>
  );
};

export default Home;
