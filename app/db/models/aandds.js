/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
const mongoose = require('mongoose')
const Schema = mongoose.Schema



const aandd = new Schema({
    Id: {
        type: Number,
        require: false
    },
    Title: {
        type: String,
        require: false,
        trim: true
    },
    Image: {
        type: String,
        require: false,
        trim: true
    },
    ImageName: {
        type: String,
        require: false,
        trim: true
    },
    Link: {
        type: String,
        require: false,
        trim: true
    }

})





module.exports = mongoose.model('aandd', aandd)