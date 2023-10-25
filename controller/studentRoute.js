const express = require('express')
const studentschema = require('../model/studentschema')
const mongoose = require('mongoose')
const studentRoute = express.Router()

studentRoute.post("/create-student", (req, res) => {
    studentschema.create(req.body, (err, data) => {
        if(err) return err
        else res.json(data)
    })
})

studentRoute.get('/', (req, res) => {
    studentschema.find((err, data) => {
        if(err) return err
        else res.json(data)
    })
})

studentRoute.route('/update-student/:id')
.get((req, res) => {
    studentschema.findById(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if(err) return err
        else res.json(data)
    })
})
.put((req, res) => {
    studentschema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id), {$set: req.body}, (err, data) => {
        if(err) return err
        else res.json(data)
    })
})

studentRoute.delete("/delete-student/:id", (req, res) => {
    studentschema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id), (err, data) => {
        if(err) return err
        else res.json(data)
    })
})

module.exports = studentRoute