let tasks = []

module.exports = {
    getAll() {
        return tasks
    },

    getById(id){
        return tasks.find(task => task.id === id)        
    },

    create(task){
        tasks.push(task)
    },

    toggleStatus(id){
        const task = tasks.find(task => task.id === id)
        if(task){
            task.status = task.status === 'concluida' ? 'pendente' : 'concluida'
        }
    },

    delete(id){
        tasks = tasks.filter(task => task.id !== id)
    }
}