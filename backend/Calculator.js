const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json())

const PORT = 5007;

app.post('/calculator',(req,res)=>{
    const {num1,num2,operation}=req.body;
    const n1 = Number(num1)
    const n2 = Number(num2)

    let result;
    if(operation === 'add'){
        result = n1+n2;
    }else if(operation === 'sub'){
        result = n1 - n2;
    }else{
        return res.status(400).json({error:"invalid operation"})
    }
    res.json({result});
})
app.listen(PORT,()=>{
    console.log(`Calculator api is running on http://localhost:${PORT}`)
})