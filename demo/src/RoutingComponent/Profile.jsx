import React from 'react'
import { Link,Outlet } from 'react-router-dom'


function Profile() {
  return (
    <div className='container text-primary text-center'>
        <h3>Profile Component</h3>

        <Link to='admin'>Admin Profile</Link>&nbsp;&nbsp;
        <Link to='user'>User Profile</Link>
        <Outlet></Outlet>
    </div>
  )
}

export default Profile
