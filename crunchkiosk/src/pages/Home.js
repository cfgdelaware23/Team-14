import React from "react";
import "../css/Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'

import Footer from "../components/Footer";
import Shop from "./Shop";

const Home = () => {
  const [vegan, setVegan] = useState("");
  const [glutenFree, setGlutenFree] = useState("");
  const [sugarFree, setSugarFree] = useState("");
  const [dairyFree, setDairyFree] = useState("");
  const [budget, setBudget] = useState("");
  // const [member, setMember] = useState("tier1");
  const [member,setMember] = useState(false);
  
  // const handleMember = (val) => {
  //   console.log(val);
    
  //   if(val === "Member"){
  //     setMember(true);
  //   } else {
  //     setMember(false);
  //   }
  // }
  
  return (
    <>
      <div className="pricing_budget">
        <div className="pricingTitle">Pricing Tier:</div>

        <div className="pricingSelect">
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="Member">Member</Dropdown.Item>
              <Dropdown.Item eventKey="Non-Member">Non-Member</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <select onChange={(e) => setMember(e.value)}>
            <option value="tier1">Member</option>
            <option value="tier2">Non-Member</option>
          </select> */}
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
              onChange={() => setVegan("vegan")}
            />
            <br></br>

            <label for="dairy">Dairy Free</label>
            <input
              type="checkbox"
              checked={dairyFree === "dairyFree"}
              onChange={() => setDairyFree("dairyFree")}
            />
            <br></br>
            <label for="glutenFree">Gluten Free</label>
            <input
              type="checkbox"
              checked={glutenFree === "glutenFree"}
              onChange={() => setGlutenFree("glutenFree")}
            />

            <br></br>
            <label for="sugarFree">Sugar Free</label>
            <input
              type="checkbox"
              checked={sugarFree === "sugarFree"}
              onChange={() => setSugarFree("sugarFree")}
            />
          </div>
        </div>
        <div className="bottom">
          <Link className="linked" to="/shop">Shop Page</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
