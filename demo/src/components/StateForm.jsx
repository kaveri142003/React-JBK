import React, { useState } from 'react'

function StateForm() {

    const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const [gender , setGender] = useState()
    const [hobbies , setHobbies] = useState()
    const [ status , setStatus] = useState( false)


    function submit()
    {
      setStatus(true)
    }
    const handleChange =(e)=>{
    setGender(e.target.value)

    }
    const clearResult = () => 
    {
      setName("")
      setEmail("")
      setPassword("")
      setGender("")
      setHobbies("")
    }



  return (
   <>
   <h1 className='text-center text-primary'>Registration Form </h1>
     <div>
      <form style={{border:"2px solid black" , width:"50rem" , height:"500px" , margin:"auto" ,backgroundColor:"#A9A9A9"}}>
        <label style={{marginLeft:"10px", marginTop :"15px"}}>Enter your name : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>

    <br></br>

    <label style={{marginLeft:"10px"}}>Enter you email : </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

    <br></br>

    <label style={{marginLeft:"10px"}}>Enter your password : </label>&nbsp;&nbsp;
    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

    <br></br>

    <label style={{marginLeft:"10px"}}>Choose gender : </label>&nbsp;&nbsp;
    <input type="radio" name="male"  value="male" checked={gender==="male"} onChange={handleChange}/>male
    &nbsp;&nbsp;
    <input type="radio" name="female" value="female" checked={gender==="female"} onChange={handleChange}/>female

    <br></br>

    <label style={{marginLeft:"10px"}}>Enter your Hobbies :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type="text" name="hobbies" value={hobbies} onChange={(e)=>setHobbies(e.target.value)} />

    <br></br><br></br>
    <input type="button" onClick={submit} value="submit" style={{marginLeft:"300px"}} className='btn btn-danger' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input type='button' value="clear" className='btn btn-success' onClick={clearResult} />

    <div style={{marginLeft :"10px" }}>{
        status ? <>
        <p> name :-{name}</p>
        <p> email :- {email}</p>
        <p>password :-{password}</p>
        <p>gender :- {gender}</p>
        <p>hobbies :- {hobbies}</p>
        
        </>:""

      }</div>
      </form>

      
      
    </div>
   </>
  )
}

export default StateForm
