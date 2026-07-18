import express from 'express'
import cors from 'cors'

const app = express()
const PORT=8081

app.use(cors())
app.use(express.json())
app.get('/api/verison',(req,res)=>{
    res.json({
        message:"V1, verision is live now"
    })
})

app.listen(PORT,()=>console.log(`Port is running on : ${PORT}`))