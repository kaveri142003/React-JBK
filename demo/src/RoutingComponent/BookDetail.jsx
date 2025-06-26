import React from 'react'
import { useParams } from 'react-router-dom';

function BookDetail() {
    const {title} = useParams()

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
    const filterBook = bookInfo.filter((e)=>e.title==title)


  return (
    
      filterBook.length !==0 ?
    
     (<div className='container mt-4' style={{border:"3px solid green" , width:"30rem"}}>
      {

            filterBook.map((e)=>{
                return(
                    <>
                    <h3>Bookid :-{e.id}</h3>
                    <p>Author :-{e.author}</p>
                    <p>Price :- {e.price}</p>
                    
                    </>

                )

                
            })
        }
      

    </div>
     ):<div style={{textAlign:centez}}>Book not found</div>
    
  )

}

export default BookDetail
