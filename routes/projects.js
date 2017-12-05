const express = require('express');
const router = express.Router();
const Project = require('../models/project');



//get a list of projects from db
router.get('/projects', (req, res, next) => {
    res.send({type: 'GET'});
});

// add a new project
router.post('/projects', (req, res, next) => {
    Project.create(req.body).then((project) => {
        res.send(project);
    }).catch(next);
});

//update a project in the db
router.put('/projects/:id', (req, res, next) => {
    Project.findByIdAndUpdate({_id: req.params.id}, req.body).then((project) => {
        Project.findOne({_id: req.params.id}).then((project) => {
            res.send(project);
        });
    })
});

//Delete a project from the db
router.delete('/projects/:id', (req, res, next) => {
    Project.findByIdAndRemove({_id: req.params.id}).then((project) => {
        res.send(project);
    });
});

module.exports = router;