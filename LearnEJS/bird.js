import express from 'express'
import bodyParser from "body-parser"
const app=express()
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("bird.ejs")
})
app.post("/submit",(req,res)=>{
    const first=req.body["fName"].length
    const second=req.body["lName"].length
    const third=first + second
    res.render("bird.ejs",{
        third:third
    })
})

app.listen(3000,()=>{
    console.log("Listening at port 3000")
})