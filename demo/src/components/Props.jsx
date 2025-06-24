import React from "react";

function Probs(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="text-primary">Props Example of Values</h2>
      
      <br></br>

      <p>Name : {props.Name}</p>
      <p>Age : {props.Age}</p>
      <p>College : {props.College}</p>

    </div>
  );
}

export default Probs;
