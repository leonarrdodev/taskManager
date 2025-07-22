const Task = require('../models/tasksModel')

module.exports = {
    index(req, res){
        res.render('index', { tasks: Task.getAll() })
    },

    create(req, res) {
        const { title, description } = req.body

        const newTask = {
            id: Date.now().toString(),
            title,
            description,
            status: 'pendente'
        }

        Task.create(newTask)
        res.redirect('/tasks')
    }, 

    toggleStatus(req, res) {
        const { id } = req.params
        Task.toggleStatus(id)
        res.redirect('/tasks')
    },

    remove(req, res){
        const { id } = req.params
        Task.delete(id)
        res.redirect('/tasks')
    }


}