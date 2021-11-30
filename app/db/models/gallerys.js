/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
const mongoose = require('mongoose')
const Schema = mongoose.Schema



const gallerys = new Schema({
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
    },
    SubLink: [{
        
            Id: {
                type: Number,
                require: false
            },
            Title: {
                type: String,
                required: false,
                trim: true
            },
            Image: {
                type: String,
                required: false,
                trim: true
            },
            ImageName: {
                type: String,
                required: false,
                trim: true
            },
            Link: {
                type: String,
                required: false,
                trim: true
            },
            Price:{
                type:Number,
                require: false
            }

        
    } ],
    URL: {
        type: String,
        required: false,
        trim: true
    }, 

})





module.exports = mongoose.model('gallerys', gallerys)