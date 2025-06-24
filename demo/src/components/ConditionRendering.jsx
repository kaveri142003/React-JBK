import React, { useState } from 'react'
import Props2 from './Props2'
import StateCalculator from './StateCalculator'
import PropsAddition from './PropsAddition'

function ConditionRendering() {
    const [status ,setStatus] = useState(true)

        if(status)
            return <StateCalculator></StateCalculator>
        else 

        return <PropsAddition></PropsAddition>
    

  
    
}

export default ConditionRendering
