require('dotenv').config();
const express = require('express')
const cors = require ('cors');

const app = express();
const PORT = process.env.PORT;
app.use(express.json())
app.use(cors())

app.get('/env',(req,res)=>{
    res.json({message:"hello from node Api"})
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})

