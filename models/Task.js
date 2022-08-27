const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter a name"],
        trim:true
    },
    completed :{
        tyep: Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',TaskSchema)