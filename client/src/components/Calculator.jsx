import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export default function Calculator() {
    const [num1,setnum1]=useState('');
    const [num2,setnum2]=useState('')
    const [result,setResult]=useState('')
    const calculate = async (operation)=>{
        const res = await axios.post(
            'http://localhost:5007/calculator',{
                num1: Number(num1),
                num2:Number(num2),
                operation

            }
        );
        setResult(res.data.result);
    }


  return (
    <div>
        <h1>Calculator</h1>
        <input type="number" placeholder="enter number 1"value={num1} onChange={(e)=>setnum1(e.target.value)} />

                <input type="number" placeholder='enter number 2' value={num2} onChange={(e)=>setnum2(e.target.value)} />

                <button onClick={()=>calculate('add')}>Add</button>
                
                <button onClick={()=>calculate('sub')}>sub</button>
                
                
                   {result !== null && <h2>Result: {result}</h2>}

    </div>
  )
}