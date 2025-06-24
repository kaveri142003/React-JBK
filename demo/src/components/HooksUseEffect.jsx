import React, { useEffect, useState } from 'react'

function HooksUseEffect() {

  const [data , setData]  =useState(0)
  const [count , setCount] = useState(10)

  useEffect(()=>{
    console.log("component mount")
    return function(){
      console.log("Compoonent Unmount")
    }

  },[])
  useEffect (()=> {
    console.log("Component Updated")
    

  },[count])

  return (
    <>
    <div className='container text-center'>

      <h3 className='text-primary'>Counter Component Mounting</h3>
      <h4>{data}</h4>
       <button className='btn btn-danger' onClick={()=>setData(data+1)}>Increment data</button> &nbsp;&nbsp;
      <h4>{count}</h4>
      <button className='btn btn-success' onClick={()=>setCount(count+1)}>Increment count</button> 
    
  
    </div>
    </>
    
      
    
  )
}

export default HooksUseEffect
