import { useState, useEffect } from "react";
function Inventory({
  vegan = "false",
  vegetarian = "false",
  glutenFree = "false",
  sugarFree = "false",
  dairyFree = "false",
  budget = "false",
  member = "false",
}) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    requestData();
  }, []);
  async function requestData() {
    const res = await fetch(`http://localhost:8080/inventory`);
    const json = await res.json();
    setItems(json);
    console.log(items);
  }
  return (
    <>
      {" "}
      <div>hello check console!!!</div>{" "}
      <form
        onSubmit={(e) => {
          requestData();
        }}
      ></form>{" "}
    </>
  );
}
export default Inventory;
