import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Json() {
    const [Products,setProducts]=useState([])
    const [error,Seterror]=useState('');
    useEffect(()=>{
    const fetchMessage=async()=>{
        try{
            const res = await axios.get(import.meta.env.VITE_JSON);
            
            setProducts(res.data)
        }catch(err){
            setProducts(err.message)
        }
    }
          
fetchMessage()
    },[])
  return (
    <div>
        {
           Products.map((m)=>(
            <div key={m.id}>
                <h1>{m.name}</h1>
                <h2>{m.class}</h2>
            </div>

           )) 
        }

    </div>
  )
}
