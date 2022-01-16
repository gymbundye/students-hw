import Student from "./Student";
function Scores(props) {
    
    return (
      <div className="App">
      <p>{props.S.score}</p>
      <p>{props.S.date}</p>

      </div>
    );
  }
  
  export default Scores;