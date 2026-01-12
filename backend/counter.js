const express = require('express');
const cors = require ('cors');

const app = express();
const PORT = 5003;
app.use(cors())
app.use(express.json());

let counter = 0;

app.get('/counter',(req,res)=>{
    res.json({counter})
});
app.post('/counter/increment',(req,res)=>{
     counter += 1;
    res.json({counter})
})
app.post('/counter/decrement',(req,res)=>{
    if(counter <= 0)
    {
        counter = 0;
    }else{
    counter -=1;
}
    res.json({counter})
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})