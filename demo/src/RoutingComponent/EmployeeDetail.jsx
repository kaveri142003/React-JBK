import React from 'react'
import { useParams } from 'react-router-dom'

function EmployeeDetail() {
  

    const { id } = useParams()

    const empInfo = [
  {
    id: 101,
    name: "Amit Sharma",
    position: "Frontend Developer",
    salary: "50000",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 102,
    name: "Priya Mehta",
    position: "UI/UX Designer",
    salary: "48000",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    id: 103,
    name: "Rahul Singh",
    position: "Backend Developer",
    salary: "55000",
    image: "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    id: 104,
    name: "Neha Patil",
    position: "QA Engineer",
    salary: "47000",
    image: "https://randomuser.me/api/portraits/women/41.jpg"
  },
  {
    id: 105,
    name: "Suresh Kumar",
    position: "HR Manager",
    salary: "60000",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    id: 106,
    name: "Anjali Rao",
    position: "Product Manager",
    salary: "75000",
    image: "https://randomuser.me/api/portraits/women/61.jpg"
  },
  {
    id: 107,
    name: "Vikas Joshi",
    position: "DevOps Engineer",
    salary: "58000",
    image: "https://randomuser.me/api/portraits/men/71.jpg"
  },
  {
    id: 108,
    name: "Sneha Deshmukh",
    position: "Business Analyst",
    salary: "53000",
    image: "https://randomuser.me/api/portraits/women/81.jpg"
  },
  {
    id: 109,
    name: "Rohit Verma",
    position: "Data Scientist",
    salary: "90000",
    image: "https://randomuser.me/api/portraits/men/91.jpg"
  },
  {
    id: 110,
    name: "Kavita Nair",
    position: "Software Architect",
    salary: "95000",
    image: "https://randomuser.me/api/portraits/women/99.jpg"
  }
];

    let filterEmp = empInfo.filter((e) => e.id == id)


    return (
        <>
            <div className='container mt-4 w-75 m-auto'>
                <br></br>
                {
                    filterEmp.map((e) => {

                        return (
                            <>
                                <div className="card" style={{width: "18rem"}}>
                                    <img className="card-img-top" src= {e.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{e.name}</h5>
                                        <p className="card-text">{e.position}</p>
                                        <p className="card-text">{e.salary}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>


                            </>

                        )
                    })
                }
            </div>








        </>
    )

}

export default EmployeeDetail
