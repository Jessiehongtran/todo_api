const route = require('express').Router()
const taskModel = require('./task.model');

//GET all tasks
route.get('/', async (req, res) => {
    try {
        const tasks = await taskModel.getAllTasks()
        res.status(200).json(tasks)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET todo tasks
route.get('/todo', async (req, res) => {
    try {
        const tasks = await taskModel.getTaskByCategory("todo")
        res.status(200).json(tasks)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET doing tasks
route.get('/doing', async (req, res) => {
    try {
        const tasks = await taskModel.getTaskByCategory("doing")
        res.status(200).json(tasks)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET done tasks
route.get('/done', async (req, res) => {
    try {
        const tasks = await taskModel.getTaskByCategory("done")
        res.status(200).json(tasks)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//ADD a task
route.post('/', async (req, res) => {
    const newTask = req.body
    try {
        const response = await taskModel.addTask(newTask)
        res.status(200).json(response)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//UPDATE a task
route.patch('/:taskId', async (req, res) => {
    const { taskId } = req.params
    const change = req.body
    try {
        const count = await taskModel.updateTask(taskId, change)
        res.status(200).json({ message: `Updated ${count} task`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

//DELETE a task
route.delete('/:taskId', async (req, res) => {
    const { taskId } = req.params
    try {
        const count = await taskModel.removeTask(taskId)
        res.status(200).json({ message: `Deleted ${count} task`})
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;