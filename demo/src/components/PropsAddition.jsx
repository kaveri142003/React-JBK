import React from 'react'

function PropsAddition(props) {
  return (
    <div className='text-center'>
        <h3 className='text-primary'>Props Example of Addition</h3>
      <p>Addition of {props.a} and {props.b} : { parseInt(props.a) + parseInt(props.b) } </p>
    </div>
  )
}

export default PropsAddition
