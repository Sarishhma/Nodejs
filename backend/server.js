// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// app.use(cors());

// app.get('/api/hello', (req, res) => {
//   res.json({ message: "Hello world from Node" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require ('express');
const cors = require ('cors')

const app = express()
const PORT = 5000;

app.use(cors())
app.get('/',(req,res)=>{
  res.json({message:"hello from node js"})
})
app.listen(PORT,()=>{
  console.log(`brower is running at http://localhost:${PORT}`)
})