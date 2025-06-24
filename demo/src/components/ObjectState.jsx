import React, { useState } from 'react';

function ObjectState() {
  const [user, setUser] = useState({
    uname: '',
    email: '',
    age: ''
  });

  const [status, setStatus] = useState(false);

  const clickHandler = () => {
    setStatus(true);
  };

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div
        className='container'
        style={{
          height: '350px',
          width: '50rem',
          border: '2px solid black',
          backgroundColor: '#F0E68C',
          padding: '20px'
        }}
      >
        <h2 className='text-center text-danger'>User Info</h2>

        <form>
          <table>
            <tbody>
              <tr>
                <td>User Name:</td>
                <td>
                  <input
                    type='text'
                    name='uname'
                    value={user.uname}
                    onChange={inputHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type='text'
                    name='email'
                    value={user.email}
                    onChange={inputHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>
                  <input
                    type='text'
                    name='age'
                    value={user.age}
                    onChange={inputHandler}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type='button'
                    className='btn btn-outline-success'
                    value="Show user's Data"
                    onClick={clickHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        {status && (
          <>
            <p>User Name: {user.uname}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
          </>
        )}
      </div>
    </>
  );
}

export default ObjectState;
