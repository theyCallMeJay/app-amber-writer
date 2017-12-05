const express = require('express');
const routes = require('./routes/projects');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

mongoose.connect('mongodb://localhost/writerapp');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());

// inintialize routes
app.use('/api', routes);

//error handling middleware
app.use((err, req, res, next) => {
    //console.log(err);
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, () => {
    console.log('Listening on the port now');
})