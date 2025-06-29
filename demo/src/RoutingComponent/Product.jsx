import React from 'react'

function Product() {
    const foodItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Fast Food",
    price: 299,
    image: "https://source.unsplash.com/200x200/?pizza"
  },
  {
    id: 2,
    name: "Veg Biryani",
    category: "Main Course",
    price: 250,
    image: "https://source.unsplash.com/200x200/?biryani"
  },
  {
    id: 3,
    name: "Masala Dosa",
    category: "South Indian",
    price: 120,
    image: "https://source.unsplash.com/200x200/?dosa"
  },
  {
    id: 4,
    name: "Cheeseburger",
    category: "Fast Food",
    price: 180,
    image: "https://source.unsplash.com/200x200/?burger"
  },
  {
    id: 5,
    name: "Paneer Tikka",
    category: "Starter",
    price: 220,
    image: "https://source.unsplash.com/200x200/?paneer"
  },
  {
    id: 6,
    name: "Butter Naan",
    category: "Bread",
    price: 40,
    image: "https://source.unsplash.com/200x200/?naan"
  },
  {
    id: 7,
    name: "Chicken Curry",
    category: "Main Course",
    price: 320,
    image: "https://source.unsplash.com/200x200/?chicken-curry"
  },
  {
    id: 8,
    name: "Gulab Jamun",
    category: "Dessert",
    price: 90,
    image: "https://source.unsplash.com/200x200/?gulab-jamun"
  },
  {
    id: 9,
    name: "Fruit Salad",
    category: "Healthy",
    price: 150,
    image: "https://source.unsplash.com/200x200/?fruit-salad"
  },
  {
    id: 10,
    name: "Pav Bhaji",
    category: "Street Food",
    price: 130,
    image: "https://source.unsplash.com/200x200/?pav-bhaji"
  }
];

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
                        foodItems.map((e) => {
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
            <br></br>
            {/* card view */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
                {foodItems.map((e) => (
                    <div key={e.id} className="card" style={{
                        width: "18rem",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        borderRadius: "10px",
                        overflow: "hidden"
                    }}>
                        <img className="card-img-top" src={e.image} alt="Book"
                            style={{ width: "100%", height: "250px", objectFit: "cover" }} />

                        <div className="card-body">
                            <h5 className="card-title">Product ID: {e.id}</h5>
                            <p className="card-text"><b>Name</b>: {e.name}</p>
                            <p className="card-text"><b>Category</b>: {e.category}</p>
                            <p className="card-text"><b>Price</b>: {e.price}</p>
                        </div>
                    </div>
                ))}
            </div>
       
      
    </div>

  )
}

export default Product
