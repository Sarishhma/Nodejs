import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Jokes() {
    const [jokes,setjokes]=useState([])
    const [loading,setloading]=useState(false)
    const fetchJokes = async()=>{
        try{
            setloading(true)
            const res = await axios.get('http://localhost:5004/jokes')
            console.log(res.data)
            setjokes(res.data.joke)
        }catch(err){
            console.error(err.message)
        }finally{
            setloading(false)
        }
    }
  return (
    <div>Jokes
        <button onClick={fetchJokes}>{ loading ? 'loading...': 'generate'}</button>
        <h1>{jokes}</h1>
    </div>
    
  )
}
