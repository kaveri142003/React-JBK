import React, { useState } from 'react'

function GreaterThree() {

    const [num1 , setNum1]  = useState(0);
    const [num2 , setNum2] =  useState(0);
    const [ num3 , setNum3] = useState(0);
    const [ result,setResult] = useState(0);
    const[status , setStatus] = useState(false);
    
    function findGreater()
    {
        if(num1>=num2 && num1>=num3){
            setResult(num1);
        }else if (num2>=num1 && num2>=num3){
            setResult(num2)
        }else{
            setResult(num3)
        }
        setStatus(true)
    }

  return (
    <>
    <div style={{border:"2px solid black" , width:"60rem" , height:"400px",margin:"auto",backgroundColor:'palegreen'}}>
        <h3 className='text-center text-primary mt-2'>Find The Greater Number between Three :States </h3>
        <lable style = {{ marginLeft:"5px",marginTop:"15px"}}>Enter the number 1:{" "}</lable>&nbsp;&nbsp;
        <input type='text' name='num' onChange={(e)=>setNum1(e.target.value)}></input>   
        <br></br><br></br>
        <lable style = {{ marginLeft:"5px",marginTop:"15px"}}>Enter the number 2:{" "}</lable>&nbsp;&nbsp;
        <input type='text' name='num' onChange={(e)=>setNum2(e.target.value)}></input>
        <br></br><br></br>
        <lable style = {{ marginLeft:"5px",marginTop:"15px"}}>Enter the number 3:{" "}</lable>&nbsp;&nbsp;
        <input type='text' name='num' onChange={(e)=>setNum3(e.target.value)}></input>
        <br></br><br></br>
        <input type='button' value= "Find Greater" name='greater' onClick={findGreater} style={{marginLeft:"200px"}} className='btn btn-success'></input>
        <br></br><br></br>

        {
            status ? (<><p style={{marginLeft:"5px" }}> Greater Among Three is: {result}</p></>) :("")
        }
    </div>
    
    
    </>
    
  )
}

export default GreaterThree
