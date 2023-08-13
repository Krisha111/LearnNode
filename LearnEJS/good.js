import express from 'express'
const app=express()



app.get("/",(req,res)=>{
    const title="EJS Tags"
const seconds=new Date().getSeconds()
const cakes=["Chocolate","Red valvet","Black forest","Cheese cake"]
const emm="<h1>This is some em tags</h1>"
    res.render("good.ejs",{
        title:title,
        seconds:seconds,
        emm:emm,
        cakes:cakes
    })
})

app.listen(8080,()=>{
    console.log("Listening at port 8080")
})