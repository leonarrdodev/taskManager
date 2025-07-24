const express = require('express')
const router = express.Router()   
const tasksController = require('../controllers/taskController')


router.get('/', tasksController.index)
router.post('/', tasksController.create)
router.post('/:id/toggle', tasksController.toggleStatus)
router.post('/:id/delete', tasksController.remove)

module.exports = router
