import React, { useState } from 'react'

function StateStuMarksheet() {

    const [status , setStatus] = useState(false)
    const[status1 , setStatus1] = useState(false)
    const[status2 , setStatus2] = useState(false)
    

    const[student ,setStudent] = useState({

    name :"",
    m1 :"",
    m2 :"",
    m3:""


    })
    let aa = parseInt(student.m1) +parseInt(student.m2) + parseInt(student.m3)
    let bb = aa/300 * 100
    let cc = bb.toFixed(2)


    
    
    function submit()
    {
        setStatus(true)
        setStatus1(false)
        setStatus2(false)
    }
    function total(){
        setStatus1(true)
        setStatus(false)
        setStatus2(false)
    }
    function percent (){
        setStatus2(true)
        setStatus(false)
        setStatus1(false)
    }
      function clearResult (){
    
        student.name = ""
        student.m1 = ""
        student.m2=""
        student.m3=""
        setStatus(false)
        setStatus1(false)
        setStatus2(false)
        
    }
    
    function inpurtHandler (e)
    {
        setStudent({...student ,[e.target.name] :e.target.value})
    }



  return (
    <>
    <h1 className='text-center text-primary'>Student Marksheet</h1>
    <div>
        <form style={{border:"2px solid black" , width:"50rem" , height:"500px" , margin:"auto" ,backgroundColor:"#FFF4C4 "}}><br></br>
        <lable style={{marginLeft:"10px", marginTop :"15px"}}>Enter your name :{""} </lable>&nbsp;&nbsp;&nbsp;
        <input type="text" name="name" value={student.name} onChange= {inpurtHandler}/>

        <br></br>
        <br></br>
        <lable style={{marginLeft:"10px", marginTop :"15px"}}>M1 Marks : </lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="m1" value={student.m1} onChange={inpurtHandler}/>

        <br></br>
        <br></br>
        <lable style={{marginLeft:"10px", marginTop :"15px"}}>M2 marks : </lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="m2" value={student.m2} onChange={inpurtHandler}/>
        <br></br>
        <br></br>
        
        <lable style={{marginLeft:"10px", marginTop :"15px"}}>M3 Marks : </lable>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" name="m3" value={student.m3} onChange={inpurtHandler}/>

              <br></br><br></br>
              <input type="button" value="totalmarks" onClick={total}  style={{marginLeft:"10px"}} className='btn btn-danger  mt-2'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <input type="button"  value="calculate percentage" onClick={percent}  style={{marginLeft:"10px"}} className='btn btn-danger mt-2' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
        <input type="button" value="submit" onClick={submit}  style={{marginLeft:"10px"}} className='btn btn-danger mt-2' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <input type='button' value="clear" className='btn btn-danger mt-2' onClick={clearResult} />

        <br></br><br></br>
        <div style={{marginLeft:"10px"}}>{
            
            status ?<>
            <p >Name :-{student.name} </p>
            <p>M1 :-{student.m1}</p>
            <p>M2 :- {student.m2}</p>
            <p>M3 :-{student.m3}</p>
                    
            </> :" "
          
            
        }  </div> 
        <div style={{marginLeft:"10px" ,marginTop:"5px"}}>
            {
                status1 ?(
                    <>
                    <p>Name :- {student.name}</p>
                    <p>Total Obtained marks  :-{aa}</p>
                    <p>Total Marks :- 300</p>
                
                       
                 </>
                ) :""
            }
        </div>
        <div style={{marginLeft:"10px" ,marginTop:"5px"}}>
            {
                status2 ?(
                    <>
                    <p>Name :- {student.name}</p>
                    <p>Total Obtained marks  :-{parseInt(student.m1) + parseInt(student.m2) + parseInt(student.m3)}</p>
                    <p>Total Marks :- 300</p>
                    <p>Percentage:-{cc}</p>
                       
                 </>
                ) :""
            }



        </div>
            
        </form>
      
    </div>
    </>
  )
}

export default StateStuMarksheet
