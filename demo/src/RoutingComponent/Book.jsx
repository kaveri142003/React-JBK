import React from 'react'

function Book() {
    const bookInfo = [
        {
            id:1 ,title :"The Alchemist" , author :"Paulo Coelho" , price:350
        },
        {
            id:2 ,title :"Rich Dad Poor Dad" , author :"Robert Kiyosaki " , price:400
        },
        {
            id:3 ,title :"Wings of Fire" , author :"A.P.J.Abdul Kalam" , price:300
        },
        {
            id:4 ,title :"Think and Grow Rich" , author :"Napoleaon Hill" , price:250
        },
        {
            id:5 ,title :"The Power Of Habit" , author :"Charles Duhigg" , price:450
        }
    ]
  return (
    <div className='conatiner text-warning text-center'>
        <h3>Book Component</h3>
        <table class="table" style={{border:"2px solid black" , width:"1100px" , textAlign:"center", marginLeft:"130px"}}>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookInfo.map((e) => {
                            return (
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.author}</td>
                                    <td>{e.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
      
    </div>
  )
}

export default Book
