const mongoose = require('mongoose')


const connectToDB = (url)=>{
    // url is the mongodb atlas connection url 
    return mongoose.connect(url)
}

module.exports = {connectToDB}