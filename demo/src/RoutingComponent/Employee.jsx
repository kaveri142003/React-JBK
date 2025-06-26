import React from 'react';
import { Link } from 'react-router-dom';

function Employee() {
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

    return (
        <>
            {/* Table View */}
            <table className="table" style={{ border: "2px solid black", width: "50rem", margin: "auto" }}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Position</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {empInfo.map((e) => (
                        <tr key={e.id}>
                            <td><Link to={`${e.id}`}><li>{e.id}</li></Link></td>
                            <td>{e.name}</td>
                            <td>{e.position}</td>
                            <td>{e.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br /><br />

            {/* Card View */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
                {empInfo.map((e) => (
                    <div key={e.id} className="card" style={{
                        width: "18rem",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        borderRadius: "10px",
                        overflow: "hidden"
                    }}>
                        <img className="card-img-top" src={e.image} alt="Employee"
                            style={{ width: "100%", height: "250px", objectFit: "cover" }} />

                        <div className="card-body">
                            <h5 className="card-title">Employee ID: {e.id}</h5>
                            <p className="card-text"><b>Name</b>: {e.name}</p>
                            <p className="card-text"><b>Position</b>: {e.position}</p>
                            <p className="card-text"><b>Salary</b>: ₹{e.salary}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Employee;
