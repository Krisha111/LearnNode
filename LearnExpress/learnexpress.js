//use ------------mkdir directory_Name-------- to make a folder in vs
// use ----------touch server.js-----------to make file--------but ths didi not worked

//----- netstat -ano | findstr "LISTENING"-------to see what is running on which port

import express from 'express'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express()
const port=8080

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

//useing middleware of body parser to get the data which the user sent from the html form
app.post('/submit',(req,res)=>{
    console.log(req.body)
})

app.get("/contact",(req,res)=>{
    res.send("Contact me")
})

app.get("/about",(req,res)=>{
    res.send("About Me")
})
app.get("/postmanget",(req,res)=>{
    res.sendStatus(201)
})
app.post("/user/post",(req,res)=>{
    res.sendStatus(200)
})
app.delete("/user/delete",(req,res)=>{
    res.sendStatus(200)
})
app.patch("/user/patch",(req,res)=>{
    res.sendStatus(200)
})
app.put("/user/put",(req,res)=>{
    res.sendStatus(200)
})

app.listen(8080,()=>{
    console.log(`Listening at port 8080`)
})