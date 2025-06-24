export default function ArrayRendering(){
    
    let arr = ["Mango" , "Apple" , "Grapes" , "Orange" , "Watermelon"]

    let studentInfo = [
        {
            id : 1 ,
            name : "Rushikesh" , 
            age : "22"
        },
        {
            id : 2 ,
            name : "Rinki" , 
            age : "23"
        },
        {
            id : 3 ,
            name : "Nishchal" , 
            age : "24"
        }
    ]

    var newArr = studentInfo.map((e)=>{
        return <li>{e.id} {e.name} {e.age}</li>
    })
    
    return(
        <>
        <div style={{textAlign:"center"}}>
        <ol>
        {
            arr.map((e)=>{
                return(
                    <>
                    <li>{e}</li>
                    </>
                )
            })
        }
        </ol>

        <hr></hr>

         {
            studentInfo.map((e)=>{
                return(
                    <>
                        <p>{e.id} {e.name} {e.age}</p>
                        
                    </>
                )
            })
         }

         <hr></hr>

         <h2 style={{textAlign:"center" , color:"blue"}}>STUDENT INFORMATION</h2>

         <table border="2" width="400px" align="center" cellPadding={7}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
           </tr>
           
            {
                studentInfo.map((e)=>{
                    return(
                        <>
                        <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        </tr>
                        </>
                    )
                })
            }
           
         </table>

         <hr></hr>

         <ul>{newArr}</ul>

         <hr></hr>
         </div>
        </>
    )
}