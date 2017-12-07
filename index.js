const express = require('express');
const projectRoutes = require('./routes/projects');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

mongoose.connect('mongodb://localhost/writerapp');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

// inintialize routes
app.use('/api', projectRoutes);

//error handling
app.use(function(err, req, res, next) {
    
    if (!err) {
        return next();
    }
    
    res.status(err.status || 500).send({message: err.message, error: err})
   
  });

// handle 404
app.use(function(req, res, next){

    console.log(res);
    res.status(404).send({message: 'Not found'});
});


app.listen(process.env.port || 4000, () => {
    console.log('Listening on the port now');
})