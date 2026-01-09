import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

export default function Hello() {
    const [message,setMessage]=useState("")
    const [error,setError]=useState("")
    useEffect(()=>{
        const fetchMessage = async()=>{
           try{
            const response = await axios.get(import.meta.env.VITE_HELLO);
            console.log(response.data.message)
            setMessage(response.data.message)
           }catch(err){
            setMessage(err.message)
            console.log(err);
           }
        }
fetchMessage();

    },[])
  return (
    <div>
        {error ? <p style={{color:"red"}}>{error}</p>: <p>{message}</p>}
    </div>
  )
}
