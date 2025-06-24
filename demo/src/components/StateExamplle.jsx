import React, { useState } from 'react'

function StateExamplle() {
    const [info ,setInfo] = useState({

         uname :"Rinks",
        email :"bhsgdjj.com",
        age: 23


    })
    function clickHandler()
        {
            setInfo({...info,age :info.age+1 , uname :"Vaibhav",email:"Vaibhav@123gmail.com"})
        }
      
  return (
    <div className='container' color='green' style={{marginLeft:"500px" }}> 
        <p>{info.uname}</p>
        <p>{info.email}</p>
        <p>{info.age}</p>

        <button className='btn btn-success' onClick={clickHandler} >Update state</button>
      
    </div>
  )
}

export default StateExamplle
