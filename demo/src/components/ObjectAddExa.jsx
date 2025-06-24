import React, { useState } from 'react'

function ObjectAddExa() {

    const [data, setdata] = useState({ 
        a :"" , 
        b :"",
        sum:""
        
    })
    const handleChange =(e) =>{ 
        setdata({...data , [e.target.name]: e.target.value})
    }
    const calculateSum = ()=>{
        setdata({...data , sum : parseInt(data.a) + parseInt(data.b)})
    }




    return (
        <>
            <div className='container' style={{ height: "300px", width: "50rem", border: "2px solid black", backgroundColor: "#F0F8FF" }}>
                <h2 className='text-center' style={{ color:"#CD853F"}}> Addition</h2>
                
                <lable style={{marginLeft:"10px", marginTop :"15px"}}>Enter a :&nbsp; &nbsp;</lable>
                <input type="text" name='a' value={data.a} onChange={handleChange} placeholder='Enter first number'  />
                <br></br><br></br>
                <lable style={{marginLeft:"10px", marginTop :"15px"}}>Enter b :&nbsp; &nbsp;</lable>
                <input type="text" name='b' value={data.b} onChange={handleChange} placeholder='Enter Second number'  />
                <br></br><br></br>

                <button onClick={calculateSum} className='btn btn-success primary'>Addition &nbsp;</button>
                <h3 className='text-center' style={{color:"blue"}}>Sum : {data.sum}</h3>

            </div>
        </>
    )
}

export default ObjectAddExa
