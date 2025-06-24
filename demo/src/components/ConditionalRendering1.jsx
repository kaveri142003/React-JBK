import React, { useState } from 'react'

function ConditionalRendering1() {

    const [isLoginIn ,setLoggedin] = useState(true)

    const clickHandler =() =>{
        if(isLoginIn)
        setLoggedin(false)
        else
        setLoggedin(true)

    }

  return (
    <>
    <div className='container'>
    {
        isLoginIn?<h2 style={{color:'green',marginLeft:"400px"}}>Welcome User !!</h2>:<h2 style={{color:'red' , marginLeft:"400px"}}>Please log in !!</h2>

        
    }
    <br></br>
    <button className='btn btn-warning' style={{marginLeft:"500px"}} onClick={clickHandler}>{isLoginIn?"logout":"login"}</button>
    </div>
    </>
    
  )

}

export default ConditionalRendering1
