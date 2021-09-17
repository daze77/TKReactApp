/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
const mongoose = require('mongoose')
const Schema = mongoose.Schema



let companyInfos = new Schema({
    addressInformation:{
        type: Object,
        required: true,
        trim: true,
        addressName: {
            type: String,
            required: true,
            trim: true        
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        address2:{
            type: String,
            required: false,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
       },
       country: {
           type: String,
           required: true,
           trim: true
       },
       postalCode: {
           type: String,
           required: true,
           trim: true
       }

    },
    ownerId: Schema.Types.ObjectId

},
{
    timestamps: true
})

module.exports = mongoose.model('companyinfos', companyInfos)