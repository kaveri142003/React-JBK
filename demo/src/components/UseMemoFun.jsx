import React, { useMemo, useState } from 'react'

function UseMemoFun() {
    const [count , setCount] = useState(1)
    const [data , setData] = useState(10)

     

     function  largefun (num)
    {
        for(let i=1;i<100;i++) 
        {
             console.log(num*i)
        }
    }


    const memofun = useMemo(()=>{


        return largefun(6)
    },[data])

    
  return (
    <>
    <h3 className='text-center text-danger'>Using Hooks(Memo)</h3>
    <div className='container mt-4 text-center' >

        {memofun}
        <p>{count}</p>
        <button className='btn btn-success' onClick={()=>setCount(count+1)}>Change count</button>&nbsp;&nbsp;&nbsp;
       <br></br>
       <br></br>
      {memofun}
        <p>{data}</p>
      <button className='btn btn-danger' onClick={()=>setData(data*5)}>Change Data</button>

    </div>
    </>
  )
}

export default UseMemoFun
