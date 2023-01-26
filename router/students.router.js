const express = require('express')

const {studentService} = require('../service/service.students')

const router = express.Router()

router.get('/', async (req,res)=>{
    try {
        const name = req.query.name;
        const [results,metadata]  = await studentService.find(name)
        
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.get('/:id', async (req,res)=>{
    try {
       const {id} = req.params
       const [student] = await studentService.findOne(id)
       res.status(200).json(student)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


router.post('/', async (req,res)=>{
    try {
        const body = req.body;
        const results = await studentService.createStudent(body);
        res.status(201).json(body)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.put('/:id', async (req,res)=>{
    try {
        const changes = req.body
        const {id} = req.params
        const [results,metadata] = studentService.updateStudent(id,changes)
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        const {id}= req.params
        const results = studentService.deleteStudent(id)
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = {studentRouter: router}