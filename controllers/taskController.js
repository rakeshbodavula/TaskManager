const Task = require('../models/Task')

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({}).lean()
        if(!tasks){
            return res.status(404).json({"msg":"No task found"})
        }
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json(error)
    }
}

const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        if(!task){
            return res.status(404).json({"msg":"No task found"})
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getOneTask = async (req,res)=>{
    try {
        const {id:TaskID} = req.params
        const task = await Task.findById({_id:TaskID}).lean()
        if(!task){
            return res.status(404).json({"msg":"No task found"})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateTask = async (req,res)=>{
    try {
        const {id:TaskID} = req.params
        const task = await Task.findByIdAndUpdate({ _id:TaskID },req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({"msg":"No task found"})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteTask = async (req,res)=>{
    try {
        const {id:TaskID} = req.params
        const task = await Task.findOneAndDelete({_id:TaskID})
        if(!task){
            return res.status(404).json({"msg":"No task found"})
        } 
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json(error)
    }
} 

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    updateTask,
    deleteTask,
}  