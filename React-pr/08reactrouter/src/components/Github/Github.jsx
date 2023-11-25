import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
//    const [data,setData]=useState([])
//     useEffect(
//         ()=>{
//             fetch('https://api.github.com/users/bibek227')
//             .then(res=>res.json())
//             .then(data=>{
//                 setData(data)
//             })
//         },[]
//     )
const data=useLoaderData()
    return (
        
        <div className='bg-gray-600 text-center m-4 text-white p-4 text-3xl'>
            Github follwers:{data.followers}
            <br />
            Github following:{data.following}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}

export default Github

export const gitInfoLoder=async()=>{
    const res=await fetch('https://api.github.com/users/bibek227')
    return res.json()
}


