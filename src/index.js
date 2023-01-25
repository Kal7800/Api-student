const express = require('express');
const sequelize = require('../db/connect')
const routerApp = require('../router/main')

const app = express();
app.use(express.json())

app.get('/', async (req,res)=>{
    try {
        res.status(200).send("Api students")
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

routerApp(app)

app.listen(3000,()=>{
    console.log('Api en el puerto 3000')
})