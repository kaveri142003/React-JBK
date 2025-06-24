import React from 'react'
 import { Link } from 'react-router-dom'

function Employee() {
    
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
  return (
    <div className='container text-danger text-center'>
        <h3>Employee Component</h3>
        
        <table class="table" style={{border:"2px solid black"}}>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empInfo.map((e) => {
                            return (
                                <tr>
                                    <td><Link to= {`${e.id}`}><li>{e.id}</li></Link></td>
                                    <td>{e.name}</td>
                                    <td>{e.position}</td>
                                    <td>{e.salary}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
      
   
      
    </div>
  )
}

export default Employee
