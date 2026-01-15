import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Env() {
    const [message,setMessage]=useState('')
    const fetch_APi = async()=>{
        const res = await axios.get(`${import.meta.env.VITE_URL}/env`)
        console.log(res.data)
        setMessage(res.data.message)
    }
  return (
    <div>
        <h1>{message}</h1>
        <button onClick={()=>fetch_APi()}>fetch</button>
    </div>
  )
}
