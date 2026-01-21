const express = require('express');
const cors = require('cors');

const app = express()
const PORT = 5009;
 app.use(cors());

 const users =[
    {id:1,
        name:'Bob',
        email:'bob123',
    },
    {
        id:2,
        name:'Ram',
        email:'ram123',
        
    },{
        id:3,
        name:'Shyam',
        email:'shyam123',
    }
 ]



app.get('/user/:id',(req,res)=>{
    const userId = parseInt(req.params.id)
    const user = users.find(u=>u.id===userId)
    if (user){
        res.json(user)
    }else{
        res.status(400).json({message:"user not found"})
    }
})
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})