import React, { useRef } from 'react'

function UseRefHook() {

    const refElement = useRef()
    const refElement1 =useRef()

    const clickHandeler =() =>{

        refElement.current.style.color="red"
        refElement.current.style.fontFamily="monospace"
        refElement.current.style.fontSize="20px"
        
        refElement1.current.style.backgroundColor="blue"
        refElement1.current.style.color="magenta"

    }
      const clickHandeler1 =() =>{

        refElement.current.style.color=""
        refElement.current.style.fontFamily=""
        refElement.current.style.fontSize=""

        refElement1.current.style.backgroundColor=""
        refElement1.current.style.color=""

        
    }
  return (
    <>
    <h3 className='text-center text-primary'>UseRef Example</h3>
  <div className='container'>


      <p className='text-centre'ref={refElement }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ex earum quos quisquam doloribus odit a quaerat iste maxime voluptate vitae, autem at assumenda laboriosam voluptas sed! Quam, sequi aliquam.</p><br></br>
      <h2 className='text-center' ref={refElement1}>React js is javascript library</h2> <br></br>

      <button className='btn btn-danger' onClick={clickHandeler}>Change Para Style</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <button className='btn btn-success' onClick={clickHandeler1}>Previous Style</button>&nbsp;&nbsp;&nbsp;
    </div>
    
    
    </>
    
  )
}

export default UseRefHook


