const express = require('express')
const path = require('node:path')
const taskRoutes = require('./routes/taskRoutes')


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/tasks', taskRoutes)

module.exports = app