import React from 'react'

function PropsSquare(props) {

  let a = parseInt(props.value) * parseInt(props.value)

  return (
    <div className='text-center'> 
      <h3 className='text-primary'>Props Example of Square</h3>
      <p>Square of {props.value} is : {a}</p>
    </div>
  )
}

export default PropsSquare
