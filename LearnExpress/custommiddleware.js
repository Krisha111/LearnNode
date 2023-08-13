//making our own middleware

import express from 'express'
import bodyParser from 'body-parser'
import {dirname} from 'path'
import { fileURLToPath } from 'url'

const __dirname=dirname(fileURLToPath(import.meta.url))

const app=express()
const port=8080

//order of middleware matters if u are using middleware and error comes first check the order of middleware
app.use(bodyParser.urlencoded({extended:true}))

//this is custom middleware
function logger(req,res,next){
   console.log("Request method",req.method)
   console.log("Request URL" ,req.url)
   next()
   //o/p
   //Request method POST
// Request URL /submit
}

app.use(logger)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})