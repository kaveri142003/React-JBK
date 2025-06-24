import React from 'react'

function EventListner() {

    function clickHandler(){
        alert('This is clickHandler Function running on Click Me Button....')
    }

    function hover(){
        alert('Hover Function in Running in React Application')
    }

  return (
   <>
   
    <div className='text-center'>
        <h1 className='text-primary'>Event Listner Demo</h1>
        <br></br>
      <button className='btn btn-danger' onClick={clickHandler}>Click Me</button>
      <br></br>
      <br></br>
      <div className='text-center' style={{border:"2px solid black" , width:"80px", margin:"auto"}}>
        <p onMouseOver={hover}>Hover Me</p>
      </div>
    </div>

   </>
  )
}

export default EventListner
