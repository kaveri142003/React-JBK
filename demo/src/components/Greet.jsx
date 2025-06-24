import React from 'react'

function Greet() {

    let tdate = new Date().toLocaleDateString()
    let ctime = new Date().toLocaleTimeString()

    let newStyle = {}
    let Greet = ""

    if(ctime>=12 && ctime<=16){
        Greet = "Good Afternoon.."
        newStyle.color = "red"
        newStyle.fontSize = "30px"
        newStyle.fontFamily = "Arial"
        newStyle.fontWeight = "bold"
    }
    else if(ctime>=17 && ctime<=19){
        Greet = "Good Evening.."
        newStyle.color = "Yellow"
        newStyle.fontSize = "30px"
        newStyle.fontFamily = "Monospace"
        newStyle.fontWeight = "bold"
    }
     else if(ctime>=20 && ctime<=24){
        Greet = "Good Night.."
        newStyle.color = "Orange"
        newStyle.fontSize = "30px"
        newStyle.fontFamily = "Times new Roman"
        newStyle.fontWeight = "bold"
    }
    else {
        Greet = "Good Morning.."
        newStyle.color = "purple"
        newStyle.fontSize = "30px"
        newStyle.fontFamily = "Arial"
        newStyle.fontWeight = "bold"
    }
 
    return (
    <>
    <h1 className='text-center text-primary'>GREET APPLICATION</h1>
    <div style={{width:"500px" , height:"200px" , margin:"auto" , marginTop:"50px" , border:"5px solid black"}}>

        <h3 style={{textAlign:"center" , marginTop:"12px"}}>Today's Date :- {tdate}</h3>
        <h3 style={{textAlign:"center" , marginTop:"12px"}}>Current Time :- {ctime}</h3>

        <h4 className='text-danger text-center'>Welcome Students , <span style={newStyle}>{Greet}</span></h4>
      
    </div>
    </>
  )
}

export default Greet
