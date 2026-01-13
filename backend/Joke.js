const express = require ('express');
const cors = require('cors');

const app = express();
const PORT = 5004;
 app.use(cors())
 app.use(express.json())

 const jokes=[
     "Why don’t programmers like nature? Too many bugs 🐛",
  "Why do Java developers wear glasses? Because they don’t C# 👓",
  "Why was the JavaScript developer sad? Because he didn’t know how to 'null' his feelings 😢",
  "Why did the developer go broke? Because he used up all his cache 💸",
  "Debugging: Removing the needles from the haystack 🧵"
 ]
 app.get ('/jokes',(req,res)=>{
    const random = Math.floor(Math.random()*jokes.length);
    res.json({
        joke:jokes[random]
    })
 })
 app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
 })