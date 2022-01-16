import studentData from "../Data";
import React,{useState} from "react";

function Student(props) {
    const [studentData, setStudentData, index] = useState(
        [{
        name: "",
        bio: "",
        scores: "",
        date: ""
        }
    ]) ;

    return (
        

        <div key={index} className="Student">   

       <ul>
           
           {setStudentData.map((studentData)=>([
               <div key={props.studentData.data}>
                   <p>{props.studentData.name}</p>
                   <p>{props.studentData.bio}</p>
                   <p>{props.studentData.scores}</p>
                   <p>{props.studentData.date}</p>
               </div>
            ] ))}
       </ul>
       )
    );
        </div>)
}
export default Student
    
    
            

