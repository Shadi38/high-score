import React from "react";
import PlayerScore from "./PlayerScore.js";
const Main = (props)=>{

props.countries.sort((a, b) => a.name.localeCompare(b.name));
console.log(props.sortOrder);
return(
    <div >
        {
props.countries.map((country,index)=>{
    return (
      <div key={index} className="MainDiv">
        <h2>High scores :{country.name} </h2>;
        <PlayerScore players={country.scores}  sortOrders={props.sortOrder}/>
      </div>
    );
})
    }

    </div>
);
};

export default Main ;