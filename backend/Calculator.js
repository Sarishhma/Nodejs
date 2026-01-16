

const express = require ('express');
const cors = require('cors');

const app = express();
const PORT = 5007;
app.use(cors())
app.use(express.json())

 


app.post('/calculate',(req,res)=>{
const {expression }=req.body;
try{
    const result = Function(`return ${expression.trim()}`)();
    res.json({result});
}catch(err){
    res.status(400).json({error:"invalis expression"})
}
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})