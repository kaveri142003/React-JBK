import React from 'react'
import { Link } from 'react-router-dom';

function Book() {
    const bookInfo = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "₹350",
    image: "https://covers.openlibrary.org/b/id/10523384-L.jpg"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: "₹499",
    image: "https://covers.openlibrary.org/b/id/10522766-L.jpg"
  },
  {
    id: 3,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "₹299",
    image: "https://covers.openlibrary.org/b/id/10489451-L.jpg"
  },
  {
    id: 4,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: "₹399",
    image: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
  },
  {
    id: 5,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: "₹450",
    image: "https://covers.openlibrary.org/b/id/11069033-L.jpg"
  },
  {
    id: 6,
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    price: "₹299",
    image: "https://covers.openlibrary.org/b/id/11714385-L.jpg"
  },
  {
    id: 7,
    title: "You Can Win",
    author: "Shiv Khera",
    price: "₹375",
    image: "https://covers.openlibrary.org/b/id/10958330-L.jpg"
  },
  {
    id: 8,
    title: "Do It Today",
    author: "Darius Foroux",
    price: "₹199",
    image: "https://covers.openlibrary.org/b/id/11060544-L.jpg"
  },
  {
    id: 9,
    title: "Ikigai",
    author: "Francesc Miralles",
    price: "₹499",
    image: "https://covers.openlibrary.org/b/id/10751961-L.jpg"
  },
  {
    id: 10,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: "₹550",
    image: "https://covers.openlibrary.org/b/id/10566228-L.jpg"
  }
];

  return (
     <>
            {/* Table View */}
            <table className="table" style={{ border: "2px solid black", width: "50rem", margin: "auto" }}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {bookInfo.map((e) => (
                        <tr key={e.title}>
                            <td><Link to={`${e.title}`}><li>{e.title}</li></Link></td>
                            <td>{e.id}</td>
                            <td>{e.author}</td>
                            <td>{e.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br /><br />

            {/* Card View */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
                {bookInfo.map((e) => (
                    <div key={e.title} className="card" style={{
                        width: "18rem",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        borderRadius: "10px",
                        overflow: "hidden"
                    }}>
                        <img className="card-img-top" src={e.image} alt="Book"
                            style={{ width: "100%", height: "250px", objectFit: "cover" }} />

                        <div className="card-body">
                            <h5 className="card-title">Book Title: {e.title}</h5>
                            <p className="card-text"><b>Id</b>: {e.id}</p>
                            <p className="card-text"><b>Author</b>: {e.author}</p>
                            <p className="card-text"><b>Price</b>: {e.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
   
    
      
    
  )
}

export default Book
