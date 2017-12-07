const express = require('express');
const router = express.Router();
const Project = require('../models/project');



//get a list of projects from db
router.get('/project', (req, res, next) => {
    Project.find().then(result => {
        res.send(result);
    }).catch(err => {
        return next(err);
    });
});

// add a new project
router.post('/project', (req, res, next) => {
    Project.create(req.body).then((project) => {
        res.send(project);
    }).catch(err => {
        return next(err);
    });
});

//update a project in the db
router.put('/project/:id', (req, res, next) => {
    Project.findByIdAndUpdate({_id: req.params.id}, req.body).then((project) => {
        Project.findOne({_id: req.params.id}).then((project) => {
            res.send(project);
        }).catch(err => {
            return next(err);
        });
    })
});

//Delete a project from the db
router.delete('/project/:id', (req, res, next) => {
    Project.findByIdAndRemove({_id: req.params.id}).then((project) => {
        res.send(project);
    }).catch(err => {
        return next(err);
    });
});

module.exports = router;