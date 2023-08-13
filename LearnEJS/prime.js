//---------for this module u have to install ejs in project-------

import express from "express"

const app=express()
const port=3000

//now to make this function print acorrding to today and not the hard coded value


// const day=new Date("June 30,2023,11:13:00")//to set the day of our choice

const day=new Date()//to get the today
const today=day.getDay()
console.log(today)

//here in this case we have to use ---LET--- to declare variable as we to change the variable in if statement 
//if the day is weekend
let type="a weekday"
let adv="it's time to work harddd"

if(today===6 ||today===7){
    type="the weekend"
    adv="it's time to have some fun"
}

app.get("/",(req,res)=>{
    res.render("prime.ejs",{
        dayType:type,
        advice:adv
    })
})

//this ---app.get  -----method will give the output but it will be hardcoded and not according to the day on which the user is
//accessing this
// app.get("/",(req,res)=>{
//     //first we have to pass the name of the file in which we want this object to pass and second paramenter will be a object
//     //which will contain the key value pair which will be accessable to the .ejs file
//     res.render("prime.ejs",{
//         DayType:"a weekday",
//         advice:"it's time to work hard."
//     })
// })

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})