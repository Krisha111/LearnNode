//making our own middleware

import express from 'express'
import bodyParser from 'body-parser'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

const __dirname=dirname(fileURLToPath(import.meta.url))

const app=express()
const port=8080
var krisha=""

//order of middleware matters if u are using middleware and error comes first check the order of middleware
app.use(bodyParser.urlencoded({extended:true}))

//this is custom middleware
function logger(req,res,next){
  krisha=req.body["email"]+req.body["user"]
   next()
}

app.use(logger)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})
app.post('/submit',(req,res)=>{
    res.send(`${krisha}`)
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})