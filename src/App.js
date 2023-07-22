import "./App.css";
import Main from "./Main.js";
import allCountry from "./allCountry.json";
import { useState } from "react";

function App() {
  const [sortOrder, setSortOrder] = useState("desc");

  const toggleSortOrder = () => {
    return setSortOrder(sortOrder === "desc" ? "asce" : "desc");
  };

  return (
    <div className="topDiv">
      <div className="AppDiv">
        <h1>High scores per country</h1>

        <button onClick={toggleSortOrder}>
          {console.log(sortOrder)}
          {sortOrder === "desc" ? "Descending" : "Ascending"}
        </button>
        <div>
          <Main countries={allCountry} sortOrder={sortOrder} />
        </div>
      </div>
    </div>
  );
}

export default App;
