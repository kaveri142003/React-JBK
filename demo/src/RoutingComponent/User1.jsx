import React from 'react'

function User1() {

    const userInfo = [
        {
            uname: "kaveri", email: "kaveri09@gmail", password: 1234
        },
        {
            uname: "vaishnavi", email: "vaish11@gmail", password: 123467
        },
        {
            uname: "Rupesh", email: "rupesh09@gmail", password: 2345
        }
    ]



    return (
        <div className='container text-center text-success'>
            <table class="table" style={{border:"2px solid black"}}>
                <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userInfo.map((e) => {
                            return (
                                <tr>
                                    <td>{e.uname}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                </tr>



                            )



                        })




                    }









                </tbody>
            </table>

        </div>
    )
}

export default User1
