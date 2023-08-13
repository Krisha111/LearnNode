// const fs=require('fs')

// //server listens the request from user and pass it to application logic to process it
// // app reteive the required data from database generate the response and send it back
// //so in backend there are three entities SERVER which should be on 24*7,APP(LOGIC) and DATABASE to store the data

// //first install node on windows

// // to run the code write node index.js in terminal

// console.log("Hello from node")
// //o/p ---------Hello from node

// //REPL---------Read,Evaluate,Print,Loop

// //---------------1.to make a file named message.txt and write hello from from NODEJS in it. The file will be in same folder as
// //as of index.js

// // fs.writeFile('message.txt','Hello from from NODEJS',(err)=>{
// //     console.log(err)
// // })

// //--------------------

// //------------2.this is to read any file for example in this case message.txt 
// // without utf8 ----o/p will be buffer-----<Buffer 48 65 6c 6c 6f 20 66 72 6f 6d 20 66 72 6f 6d 20 4e 4f 44 45 4a 53>
// // with utf8 -----o/p will be converted to text and will show--------data of the file in console here in this case
// //output will be --------Hello from from NODEJS
// fs.readFile('./message.txt',"utf8",(err,data)=>{
//     if (err) throw err
//     console.log(data)
// })

//------------------------------------------npm module--------------------------------

//npm init is used to create package.json file 
//npm -y init will create package.json but bydefault settings

//to use import statement and not require statements in node--------use "type":"module" in package.json
//belove index.js set to main

//npm install <something> to install the packages from npm

//first package is sillyname

// const generateName=require('sillyname')

// const sillyName=generateName()
// console.log(`My name is ${sillyName}`)

//------------------making qrl code generator------------------

import inquirer from "inquirer";
import qr from 'qr-image'
import fs from 'fs'

inquirer.prompt([{
    "type":"Enter the qr code href",
    "name":"URL"
}]).then((answer)=>{
    
   console.log(answer.URL)
   const qr_image=answer.URL
   qr.pipe(fs.createWriteStream(qr_image))
})
