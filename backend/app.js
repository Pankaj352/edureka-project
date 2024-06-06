//imports
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const zomatoRoutes=require('./routes/zomato')
const mongoose=require('mongoose')

//connect to mongoDB 
mongoose.connect('mongodb://localhost:27017/zomato',
    ()=>{
    console.log("mongoDB connected")},
    e=>console.log(e))


//create express server
var app=express()

//add middleware before routes
app.use(bodyParser.json())
app.use(cors())

//middleware routes 
app.use('/zomato',zomatoRoutes)

//listen to a port 
app.listen(7878,()=>{
    console.log("express app is up and running on port 7878")
})