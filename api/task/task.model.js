const db = require('../../database/dbConfig');

const getAllTasks = () => {
    return db('task')
}

const getTaskByCategory = (cate) => {
    return db('task')
            .where({category: cate})
}

const addTask = (task) => {
    return db('task')
            .returning('id')
            .insert(task)
            .then(ids => ({ id: ids[0] }))
}

const updateTask = (id, change) => {
    return db('task')
            .where({id: id})
            .update(change)
}

const removeTask = (id) => {
    return db('task')
            .where({id: id})
            .del()
}

module.exports = {
    getAllTasks,
    getTaskByCategory,
    addTask,
    updateTask,
    removeTask
}