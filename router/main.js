const express = require('express')

const {studentRouter} = require('./students.router')

function routerApp(app){
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/students',studentRouter)
   
}

module.exports = routerApp