import React, { useState } from 'react'

function ValidationForm() {
   const[name ,setName] = useState()
   const[mobile , setMobile] = useState()
   const [error , setError] = useState(false)
   const [merror ,setMerror] = useState(false)
   const   pattern= /^[789]\d{9}$/

    function uHandler(e)
    {
      let value = e.target.value
      let len = e.target.value.length 
      setName(value)
      if(len <4)
    {
      setError(true)
    }
    else
    {
      setError (false)
    }
    }
    
    function  mHandler(e)
    {
      let value = e.target.value 
      if( !pattern.test (value))
      {
        setMerror(true)
      }
      else
      {
        setMerror(false)
      }
    }




  return (
    <>
    <h3 className='text-center '>Form Validation</h3>
    <div className='container'>
    <form style={{border:"2px solid black" , width:"50rem" , height:"200px" , margin:"auto" ,backgroundColor:"#A9A9A9"}}>
        <label style={{marginLeft:"10px", marginTop :"15px"}}>Enter your name : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" name="name" value={name} onChange={uHandler}/>
    <p>{error && <p style={{color:"red" , marginLeft:"9rem"}}>Name should  be greaer han 4characters...</p>}</p>

    <br></br>
    

    <label style={{marginLeft:"10px"}}>Enter your Mobile : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" name="mobile" value={mobile} onChange={mHandler} />
    <p>{merror && <p  style={{color:"red" , marginLeft:"9rem"}}>Invalid mobile number</p>}</p>


    <br></br>






    </form>
        
      
    </div>
    </>
  )
}

export default ValidationForm
