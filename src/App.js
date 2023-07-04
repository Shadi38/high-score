
import "./App.css";
import Main from "./Main.js";
import allCountry from "./allCountry.json";
import { useState } from "react";

function App() {
  // const [sort,setSort] = useState();

const handleClick = ()=>{
setSort();
}

  return (
    <div className="topDiv">
      <div className="AppDiv">
        <h1>High scores per country</h1>
        <button onClick={handleClick}>sort</button>
        <div>
          <Main countries={allCountry} />
        </div>
      </div>
    </div>
  );
}

export default App;
