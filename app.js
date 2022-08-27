const connectToDB =  require('./db/connect')
const express = require('express')
const taskRoutes = require('./routes/tasks')
const app = express()

const port = process.env.PORT || 8080

require('dotenv').config()

const connectDB = async ()=>{
    try{
       await connectToDB(process.env.MONGO_URI)
       app.listen(port,()=>{
        console.log(`http://localhost:${port}/`)
    })
    }catch(err){
        console.log(err)
    }

}


// middleware
app.use(express.static('./public'))
app.use(express.json())





app.use('/api/v1/tasks',taskRoutes) // default url


connectDB()