import React, { createContext } from 'react'
import B from './B'


const data1 =createContext()
const data2 = createContext()
const data3 =createContext()

 function A() {
  const  uname ="Rinks"
  const age = 23
  const email="abc@gmail.com"



  return (
    <>
    <h3 className='text-center'>Using Hooks (useContext Example)Data transfer A-D</h3>
    <div className='text-center'>A Component</div>
    <data1.Provider value={uname}>
      <data2.Provider value={age}>
        <data3.Provider value={email}>

    <B></B>
    </data3.Provider>
    </data2.Provider>
    </data1.Provider>
    </>
    


      
    
  )
}
export default A
export {data1,data2,data3}
