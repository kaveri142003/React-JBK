import React, { useState } from "react";

function StateCalculator() {
  const [fno, setfno] = useState();
  const [sno, setsno] = useState();
  const [result, setresult] = useState();

  function fnoinput(e) {
    setfno(e.target.value)
  }

  function snoinput(e) {
    setsno(e.target.value)
  }

  function addresult(){
    setresult( parseInt(fno) + parseInt(sno) )
  }

  function subresult(){
    setresult( parseInt(fno) - parseInt(sno) )
  }

  function mulresult(){
    setresult( parseInt(fno) * parseInt(sno) )
  }

  function divresult(){
     setresult( parseInt(fno) / parseInt(sno) )
  }

  const clearresult = () => {
    setfno("")
    setsno("")
    setresult("")
  }

  return (
    <>
      <div>
        <h1 className="text-primary text-center">Simple Calculator</h1>
        <br></br>
        <form>
          <table style={{border:"2px solid black" , margin:"auto", width:"800px" , height:"200px" , backgroundColor:"#F0F8FF"}}>
            <br></br>
            <tr>
              <td style={{paddingLeft:"15px"}}>Enter first number : </td>
              <td>
                <input type="text" name="fno" value={fno} onChange={fnoinput}></input>
              </td>
            </tr>

            <br></br>
            
            <tr>
              <td style={{paddingLeft:"15px"}}>Enter Second number : </td>
              <td>
                <input type="text" name="sno" value={sno} onChange={snoinput}></input>
              </td>
            </tr>
            
            <br></br>
            
            <tr>
              <td style={{paddingLeft:"15px"}}>Result :</td>
              <td><input type="text" name="result" value={result} /></td>
            </tr>
            
            <br></br>
            
            <tr>
              <td></td>
              <td>
                <input
                  type="button"
                  value="Addition"
                  className="btn btn-outline-success"
                  onClick={addresult}
                  style={{marginBottom:"5px"}}
                ></input>
                
                &nbsp;
                &nbsp;
            
                <input
                  type="button"
                  value="Substraction"
                  className="btn btn-outline-success"
                  onClick={subresult}
                  style={{marginBottom:"5px"}}
                ></input>
              
                &nbsp;
                &nbsp;
            
                <input
                  type="button"
                  value="Multiplication"
                  className="btn btn-outline-success"
                  onClick={mulresult}
                  style={{marginBottom:"6px"}}
                ></input>
              
                &nbsp;
                &nbsp;
               
                <input
                  type="button"
                  value="Division"
                  className="btn btn-outline-success"
                  onClick={divresult}
                  style={{marginBottom:"6px"}}
                ></input>

                &nbsp;
                &nbsp;
               
                <input
                  type="button"
                  value="clear"
                  className="btn btn-outline-success"
                  onClick={clearresult}
                  style={{marginBottom:"6px"}}
                ></input>
              
              </td>

            </tr>
            
          </table>
        </form>
      </div>
    </>
  );
}

export default StateCalculator;
