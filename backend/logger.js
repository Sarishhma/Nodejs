const express = require ('express')
const cors = require ('cors');

const app = express();
const PORT =5005;

app.use(cors())
app.use(express.json());

app.use((req,res,next)=>{
    const time = new Date().toLocaleString()
    console.log(`[${time}]${req.method},${req.url}`,req.body)
    next();

})
app.get('/logger',(req,res)=>{
    res.send('Logged!')
})
app.post('/logger',(req,res)=>{
    res.json({message:"Post request logged",body:res.body})
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})