import React from "react";
import Scores from "./Scores";



function StudentList(props) {
  console.log(props)
    return (
      <div className="App">
          <ul>
        <p>{props.S.name}</p>
        <p>{props.S.bio}</p>
        {props.S.scores.map((S, index)=>{return <Scores S={S} key={index}/> })}
  
        </ul>
      </div>
    );
  }
  
  export default StudentList;