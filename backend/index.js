const express = require ('express');
const cors = require ('cors')
const products = require ('./data')

const app = express();
const PORT = 5001;

app.use (cors());

app.get ('/api/products',(req,res)=>{
    res.json(products);
});
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
});