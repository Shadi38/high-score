import { useState, useEffect } from "react";

const PlayerScore = (props) => {
  const [outPut, setOutPut] = useState([]);

  useEffect(() => {
    if (props.sortOrders === "desc") {
      const sortedArray = props.players.sort((a, b) => b.s - a.s);
      setOutPut(sortedArray);
    } else {
      const sortedArray = props.players.sort((a, b) => a.s - b.s);
      setOutPut(sortedArray);
    }
  }, [props.sortOrders, props.players]);

  return (
    <div>
      {outPut.map((player, index) => (
        <div className="playerScoreDiv" key={index}>
          <h2>{player.n}</h2>
          <h2>{player.s}</h2>
        </div>
      ))}
    </div>
  );
};

export default PlayerScore;
