import React, { useState } from 'react'

function ValidationForm2() {
    const [form , setForm] = useState({
        username :"",
        email  :"",
        password :"",
        confirmpassword :""
    })
        let pattern =/\S+@\S\.S+/
        let upattern = /^([A-Z]{1,1}) +([a-z]{2,6})$/

        const [ error , setError] = useState({})

        function HandleChange (e)
        {
            setForm({...form ,[e.target.name] :e.target.value})
        }
        
        function HandleSubmit (e)
        {
            e.preventDefault()

            const validation = {}

            if(!form.username)
            {
                validation.username = "username is required..."
            }
            
            if(!form.email)
            {
                validation.email = "email is required..."
            }

            if(!form.password)
            {
                validation.password = "password is required..."
            }

            if(!form.confirmpassword)
            {
                validation.confirmpassword= "confirm password is required..."

            }else if(!form.password.match(form.confirmpassword)){
                validation.confirmpassword = "confirm password does not match"
            }

            setError(validation)

        if (Object.keys(validation).length===0)
        {
            alert("Form Submitted Successfully....")
        }
        

        }
    return (
        <>
            <div className='container text-center' style={{border:"2px solid black", height:"400px", width:"600px"}} >
                <form onSubmit={HandleSubmit}>
                    <div>
                        <label className='mt-4'>Username:</label>
                        <input type='text' name="username" value={form.username} placeholder='username' autoComplete='off' onChange={HandleChange}></input>
                        {error.username && <p className='text-danger'>{error.username}</p>}
                    </div><br></br>
                    <div>
                        <label>Email:</label>
                        <input type='text' name="email" value={form.email} placeholder='abc@gmail.com' autoComplete='off' onChange={HandleChange}></input>
                        {error.email && <p className='text-danger'>{error.email}</p>}
                    </div><br></br>
                    <div>
                        <label>Password :</label>
                        <input type='text' name="password" value={form.password} placeholder='password' autoComplete='off' onChange={HandleChange}></input>
                        {error.password && <p className='text-danger'>{error.password}</p>}
                    </div><br></br>
                    <div>
                        <label>Confirm Password :</label>
                        <input type='text' name="confirmpassword" value={form.confirmpassword} placeholder=' confirm password' autoComplete='off' onChange={HandleChange}></input>
                        {error.confirmpassword && <p className='text-danger'>{error.confirmpassword}</p>}
                        
                    </div><br></br>
                    <div>
                        <button type='submit' className='btn btn-danger'>Submit</button>
                    </div>
        </form >
        </div>
  
    
    </>
  )
}

export default ValidationForm2
