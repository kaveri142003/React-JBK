import React, { useState } from 'react'

function StatePractice() {

    const [num , setnum]= useState()
    const[factorial, setFactorial] = useState()
    
    function findFact(){
    
        let fact = 1
        for(let i=1 ; i<=num;i++){
            fact = fact*i
    }
        setFactorial(fact)
}
  return (
    <>
    <div style={{border:"2px solid black", width:"60rem",height:"220px", margin:"auto",backgroundColor:"lightblue" }}>
        <h3 className='text-center text-primary mt-2'>Find Factorial:State Example</h3>
        <label style={{marginLeft :"5px", marginTop :"15px"}}>Enter the number</label>&nbsp;&nbsp;
        <input type='text' name ="num" onChange={(e)=> setnum(e.target.value)}></input>
        <br></br><br></br>
        <input type='button'value= "factorial" name='factorial' onClick={findFact} style={{marginLeft:"200px"}} className='btn btn-success'></input>
        <br></br><br></br>
        <h6 style={{marginLeft:"5px" }}>Factorial of {num} is :{factorial}</h6>
      
    </div>
    
    
    </>
    
  )
}

export default StatePractice
