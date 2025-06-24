
export default function First  ()
{
     let newStyle={
        color:'blue',
        fontFamily:'Arial',
        textTransform :'uppercase',
        textAlign:'center'


    }
    let status = true
    let a=60

    let student={
        rno: 1,
        name :"Kaveri",
        marks :78,
        stream: "MCA",
        city :"pune"
    }
    return(
        <>
        <div className="app">
            <h1 className="text-center text-success">First component</h1>
            
            <div className='c1'>
                <p>Roll No:-{student.rno}</p>
                <p>Student Name:-{student.name}</p>
                <p>Marks:-{student.marks}</p>
                <p>Stream:-{student.stream}</p>
                <p>City:-{student.city}</p>


            </div>

            { a>50?"Welcome": "Hello"}
            {/* <h2 style={newStyle}>This is First component</h2> */}
            
        </div>
        
        </>


    )
}

