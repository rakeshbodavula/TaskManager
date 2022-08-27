const mongoose = require('mongoose')


const connectToDB = (url)=>{
    // url is the mongodb atlas connection 
    return mongoose.connect(url)
}

module.exports = connectToDB