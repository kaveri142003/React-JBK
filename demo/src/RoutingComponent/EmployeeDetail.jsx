import React from 'react'
import { useParams } from 'react-router-dom'

function EmployeeDetail() {

    const {id} = useParams()

     const empInfo =[
        {
            id:101 , name:"Amit Sharma" ,position :"Developer" , salary:"50000"
        },
        {
            id:102 , name:"Priya mehata" ,position :"Designer" , salary:"45000"
        },
        {
            id:103 , name:"Rahul Singh" ,position :"Project Manager" , salary:"70000"
        },
        {
            id:104 , name:"Neha Patil " ,position :"QA Engineer" , salary:"40000"
        },
        {
            id:105 , name:"Suresh Kumar" ,position :"Hr Manager" , salary:"55000"
        },

    ];
    let filterEmp = empInfo.filter((e)=>e.id==id)


  return (
    <>
    <div className='container mt-4'>
    <br></br>
    <div style={{width:"25rem" , border:"2px  solid blue", margin:"auto" , padding:"10px"}}>
    {
        filterEmp.map((e)=>{
            
            return (
                <>
                <h3 className='text-primary'>EmpName :- {e.name}</h3>
            <p>Position :-{e.position}</p>
            <p>Salary :-{e.salary}</p>
            </>
            )
            
            


        })
    }
    </div>
    </div>   
      
    </>
  )
}

export default EmployeeDetail
