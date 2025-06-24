import React from 'react'

function PropsFactorial(props) {
    let a = 1
    for(let i=1 ; i<=parseInt(props.value) ; i++){
        a = a*i
    }

  return (
     <div className='text-center'> 
      <h3 className='text-primary'>Props Example of Factorial</h3>
      <p>Factorial of {props.value} is : {a}</p>
    </div>
  )
}

export default PropsFactorial
