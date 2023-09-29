import React from "react";
import "../css/Home.css";
import { useState } from "react";

const Home = () => {
  const [vegan, setVegan] = useState("");
  const [glutenFree, setGlutenFree] = useState("");
  const [sugarFree, setSugarFree] = useState("");
  const [dairyFree, setDairyFree] = useState("");

  return (
    <div>
      {/* sugar freee vegan gluten free */}
      {/* change value to be what db name col is */}

      <header> Dietary Restrictions</header>
      <div className="">
        <label for="vegan">Vegan</label>
        <input
          type="radio"
          checked={vegan === "vegan"}
          onChange={() => setVegan("Vegan")}
        />
        <br></br>

        <label for="dairy">Dairy Free</label>
        <input
          type="radio"
          checked={dairyFree === "dairyFree"}
          onChange={() => setDairyFree("dairyFree")}
        />
        <br></br>

        <label for="glutenFree">Gluten Free</label>
        <input
          type="radio"
          checked={glutenFree === "glutenFree"}
          onChange={() => setGlutenFree("glutenFree")}
        />
        <br></br>
        <label for="sugarFree">Sugar Free</label>
        <input
          type="radio"
          checked={sugarFree === "sugarFree"}
          onChange={() => setSugarFree("sugarFree")}
        />
      </div>
    </div>
  );
};

export default Home;
