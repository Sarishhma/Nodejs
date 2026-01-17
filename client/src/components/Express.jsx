import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Express() {
    const [user,setuser]=useState([]);
    const [time,settime]=useState('');
    const [hello,setHello]=useState('')

useEffect(()=>{
    const fetchData = async()=>{
        try{
             const Hellores = await axios.get("http://localhost:5008/express");
       setHello(Hellores.data.message);
       console.log(Hellores.data.message);
       
       const timeres= await axios.get('http://localhost:5008/express/time')
       settime(timeres.data.time)

       const userres= await axios.get('http://localhost:5008/express/users')
       setuser(userres.data);

        }catch(err){
        console.error(err.message)
    }
        
    }
    fetchData();
           
},[])

  return (
    <div>
        <h1>Express</h1>
        <p>{hello}</p>
        <p>{time}</p>
        {user.map((m)=>(
            <div key={m.id}>
                <p>{m.name}</p>
            </div>
        ))}
    </div>
  )
}
