//-----------EJS TAGS----------------

//<%= variable %>---------JS Output --------means the variable written inside teh bracs ,its value will be printed in the o/p

//<%% %%>--------show <% or %>---------if u are teching ejs then to print <% %> this tag is used

//donnot forget to write - sign
//<%- include("header.ejs") %>--------insert  another EJS file

//<%#This is a comment %>--------Stop Exectuion means it is a comment

//<% console.log("hello") %>-------JS Execute----------this will not be shown in o/p but it will only execute

//<%- <h1>Hello</h1> %>--------Render Html------this html will execute and result into hello printed in o/p in h1 (bold)

import express from "express"
import {dirname} from 'path'
import { fileURLToPath } from "url"

const app=express()
const fruits=["WaterMelon","Mango","Banana","Leechi"]
const __dirname=dirname(fileURLToPath(import.meta.url))

app.get("/",(req,res)=>{
  res.render("ejss.ejs",{
    fruits:fruits
  })
})

app.listen(3000,()=>{
    console.log("Listening at 3000")
})


