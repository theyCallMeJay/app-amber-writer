const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});


//creat project schema and model
const ProjectSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title field is required']
    },
    targetWordCount: {
        type: Number,
        required: [true, 'Target word count is required'],
        default: 0
    },
    currentWordCount: {
        type: Number,
        required: false,
        default: 0
    },

    geometry: GeoSchema

});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;