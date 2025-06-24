import React, { useState } from "react";

function StateDemo() {

  let [a, setA] = useState(30);

  function clickHandler() {
    setA(a + 1);
  }

  function clickHandlerDec() {
    setA(a - 1);
  }

  function cube(){
    setA(a*a*a)
  }

  function factorial(){
    let num = 1
    for(let i=1 ; i<=a ; i++){
      num = num *i
    }
    setA(num)
  }

  return (
    <>
      <div className="text-center">
        <h2 className="text-primary">State UseCase Demo</h2>
        <br></br>
        <h4>Value of A : {a}</h4>
        <br></br>
        <button className="btn btn-outline-primary"  onClick={clickHandler}>
          Increment A
        </button>
       

        <button className="btn btn-outline-primary" style={{marginLeft:"6px"}} onClick={clickHandlerDec}>
          Decrement A
        </button>
        
        <button className="btn btn-outline-primary" style={{marginLeft:"6px"}} onClick={cube}>
          Cube of A
        </button>

        <button className="btn btn-outline-primary" style={{marginLeft:"6px"}} onClick={factorial}>
          Factorial of A
        </button>

      </div>
    </>
  );
}

export default StateDemo;
