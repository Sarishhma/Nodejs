import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Counter() {
    const [ count ,setcount]=useState(0)
  
     const fetch_api = async()=>{
            try{
                    const res= await axios.get('http://localhost:5003/counter')
          
            setcount(res.data.counter)
            }catch(err){
                console.error(err.message)
            }
        

        }
        const increment = async()=>{
            try{
                const res = await axios.post('http://localhost:5003/counter/increment')
                setcount(res.data.counter)
            }catch(err){
                console.error(err.message)
            }
        }
        const decrement = async()=>{
            try{
                const res = await axios.post('http://localhost:5003/counter/decrement')
                setcount(res.data.counter)
            }catch(err){
                console.error(err.message)
            }
        }

        useEffect(()=>{
            fetch_api();
        },[])
     


  return (
    <div className='text-black'>
        <h1>Counter App</h1>
        <p>{count}</p>
        
        <button onClick={increment} >add</button>
         <button onClick={decrement} >minus</button>
    </div>
  )
}
