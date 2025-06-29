import React, { useState } from 'react'
import Child from './Child'

function PropsAsCallback() {

    const [info, setInfo] = useState()

    function showMsgFromChild(msg) {
        setInfo(msg)
    }
    
        return (
            <>
        <div style={{textAlign:"center"}}className='container'>
            <Child f={showMsgFromChild}></Child>

            <h3>{info}</h3>
        </div>
    </>
    )
}

export default PropsAsCallback
