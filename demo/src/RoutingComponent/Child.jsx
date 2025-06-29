import React from 'react'

function Child(props) {
  return (
    <>
    <div style={{textAlign:'center'}}className='container '>
        
        <button className='btn btn-primary' onClick={()=>props.f("Hello from Child...")}>send data from child to parent</button>
      
    </div>
    </>
  )
}

export default Child
