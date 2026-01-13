import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Logger() {
    const [logger,setLogger]=useState('')
    const fetch_api=async()=>{
        try{
            const res = await axios.get('http://localhost:5005/logger')
        console.log(res.data)
        setLogger(res.data)

        }catch(err){
            console.error(err.message)
        }
        
    }
        const fetch_api_post=async()=>{
        try{
            const res = await axios.post('http://localhost:5005/logger',{
                user:'React Client',
                action:"button clicked",
            })
        console.log(res.data.message)
        setLogger(res.data.message)

        }catch(err){
            console.error(err.message)
        }
        
    }
  return (
    <div>
        <h1>Logger</h1>
        <p>{logger}</p>
        <button onClick={fetch_api}>get data</button>
        <button onClick={fetch_api_post}>POST data</button>
    </div>
  )
}
