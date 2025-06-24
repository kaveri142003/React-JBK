import React from 'react'

function Product() {
    const ProductInfo =[
        {
            id:1 ,name:"Laptop" , category:"Electronics" ,price :25000
        },
        {
            id:2 ,  name:"Mobile Phone" , category:"Electronics" , price:25000
        },
        {
            id:3 ,  name:"Office Chair" , category:"Electronics" , price:5000
        
        },
        {       
            id:4 ,  name:"Wireless Mouse" , category:"Accessories" , price:700
        },
        {
            id:5,  name:"Water Bottle" , category:"Electronics" , price:350     
        }

    ]

  return (
    <div className='container text-primary text-center'>
        <h3>Product Component</h3>
         <table class="table" style={{border:"2px solid black"}}>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ProductInfo.map((e) => {
                            return (
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.category}</td>
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

export default Product
