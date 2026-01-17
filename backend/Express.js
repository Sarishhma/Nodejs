const express = require ('express');
const cors = require('cors');

const app = express();
const PORT = 5008;

app.use(express.json());
app.use(cors())

app.get('/express',(req,res)=>{
    res.json({message:"hello from express app"})
});
app.get('/express/time',(req,res)=>{
    res.json({time:new Date().toISOString()})
})
app.get('/express/users',(req,res)=>{
    res.json([
        {
            id:1,
            name:"sarishma",

        },{
            id:2,
            name:"saraj",

        }
    ])
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})