import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Dynamic() {
    const {id}= useParams();
    const [user,setUser]=useState(null);
    const [loading,setloading]= useState(false)

useEffect(()=>{
    const fetch_api = async()=>{
        setloading(true)
        try{
             const res= await axios.get(`http://localhost:5009/user/${id}`)
        console.log(res.data);
        setUser(res.data)
        }
       
    catch(err){
        console.error(err)

    }finally{
        setloading(false)
    }
}
    fetch_api()
},[id]);
 if (loading) return <p>loading...</p>
 if(!user) return <h2>user not found</h2>

  return (
 
    <div>
        <h1>users detail</h1>
        <p>{user.id} {user.email} {user.name}</p>
    </div>
  )
}
