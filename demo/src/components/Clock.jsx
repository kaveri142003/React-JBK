import React, { useRef, useState } from 'react'

function Clock() {

     let t= new Date().toLocaleTimeString()
    const[ ctime , setCTime]= useState()
     const Interval = useRef(null)

    function clickHandler()
    {
        Interval.current =setInterval (fun ,1000)
        
    }
    function fun()
    {
        t =new Date().toLocaleTimeString()
        setCTime(t)
    }
     const clickHandler1 = () =>
    {
        window.clearInterval(Interval.current)
    }
     

  return (
    <>
    <div className='text-center mt-3 p-3'>
    <h2 className='text-primary text-success'>Digital Clock </h2>
    <br></br>
    

    <h4>{ctime}</h4><br></br>
     <button className='btn btn-danger' onClick={clickHandler}>Start Clock</button>&nbsp;&nbsp;
    <button className='btn btn-warning'onClick={clickHandler1}>Stop Clock</button>
    </div>
    
    
    </>
    
  )
}

export default Clock
