import React, { useContext } from 'react'
import {data1,data2,data3} from './A'

 function D () {
  const u = useContext(data1)
  const a = useContext(data2)
  const e = useContext(data3)


  return (
    <>
    <div className='text-center' >D Component</div>
    
    < div className='text-center text-primary'>
    <p>User name :- {u}</p>
    <p>Age :- {a}</p>
    <p>Email :- {e}</p>
    </div>

    </>
      
    
  )
}
export default D
