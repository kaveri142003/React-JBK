import React from "react";

function MapFilterExample() {
  const employees = [
    {
      id: 1,
      name: "Aarav Sharma",
      salary: 50000,
      profession: "Software Engineer",
    },
    { id: 2, name: "Meera Iyer", salary: 60000, profession: "Data Analyst" },
    { id: 3, name: "Rohan Gupta", salary: 55000, profession: "HR" },
    {
      id: 4,
      name: "Sneha Patel",
      salary: 70000,
      profession: "Project Manager",
    },
    {
      id: 5,
      name: "Vikram Rao",
      salary: 48000,
      profession: "HR",
    },
    {
      id: 6,
      name: "Anjali Deshmukh",
      salary: 52000,
      profession: "Frontend Developer",
    },
    {
      id: 7,
      name: "Karan Joshi",
      salary: 61000,
      profession: "DevOps Engineer",
    },
    { id: 8, name: "Pooja Nair", salary: 47000, profession: "QA Tester" },
    {
      id: 9,
      name: "Rahul Verma",
      salary: 75000,
      profession: "Business Analyst",
    },
    {
      id: 10,
      name: "Nisha Kulkarni",
      salary: 58000,
      profession: "HR",
    },
  ];

  let arrFilter = employees.filter((e) => e.profession == "HR");

  let salaryFilter = employees.filter((e)=>e.salary>="70000")

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          Employee Information using Map Function
        </h2>
        <br></br>
        <table class="table w-50 p-4 m-auto">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Emp ID</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Profession</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((e) => {
              return (
                <>
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.salary}</td>
                    <td>{e.profession}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <hr></hr>

        <h2 style={{ textAlign: "center", color: "blue" }}>
          Employee Information using Filter Function : Profession HR
        </h2>
        <br></br>
        <table class="table w-50 p-4 m-auto">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Emp ID</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Profession</th>
            </tr>
          </thead>
          <tbody>
            {arrFilter.map((e) => {
              return (
                <>
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.salary}</td>
                    <td>{e.profession}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>

        <hr></hr>

         <h2 style={{ textAlign: "center", color: "blue" }}>
          Employee Information using Filter Function : Salary above 70,000
        </h2>
        <br></br>
        <table class="table w-50 p-4 m-auto">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Emp ID</th>
              <th scope="col">Name</th>
              <th scope="col">Salary</th>
              <th scope="col">Profession</th>
            </tr>
          </thead>
          <tbody>
            {salaryFilter.map((e) => {
              return (
                <>
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.salary}</td>
                    <td>{e.profession}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MapFilterExample;
