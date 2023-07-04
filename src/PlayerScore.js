const PlayerScore = (props) =>{
    return (
      <div>
        {
          //make the array of score numbers  numerically, descending
          props.players
            .sort((a, b) => b.s - a.s)
            .map((player, index) => {
              return (
                <div>
                  <div className="playerScoreDiv" key={index}>
                    <h2>{player.n}</h2>
                    <h2>{player.s}</h2>
                  </div>
                </div>
              );
            })
        }
      </div>
    );
};

export default PlayerScore;