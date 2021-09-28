/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
const mongoose = require('mongoose')
const Schema = mongoose.Schema



let compaddresses = new Schema({

    addressName: {
        type: String,
        required: false,
        trim: true        
    },
    address: {
        type: String,
        required: false,
        trim: true
    },
    address2:{
        type: String,
        required: false,
        trim: true
    },
    city: {
        type: String,
        required: false,
        trim: true
    },
    province: {
        type: String,
        required: false,
        trim: true
    },
    postalCode: {
        type: String,
        required: false,
        trim: true
    },
    country: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: false,
        trim: true
    },
    phone: {
        type: String,
        required: false,
        trim: true
    },
    addressflag:{
        type: Boolean,
        required: false,
        default: false
    },
    
    ownerId: Schema.Types.ObjectId
},
{
    timestamps: true
}
)

module.exports = mongoose.model('compaddresses', compaddresses)