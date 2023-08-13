import express from 'express'
import morgan from 'morgan'

const app=express()
const port=8000

app.use(morgan("combined"))
//here in morgan middleware u can use tiny and many other options instead of combined according to your requirements
//so to see that refer to morgan docs

app.get("/",(req,res)=>{
    res.send("Hello Duniya...")
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})