const mongoose = require('mongoose')
const Schema = mongoose.Schema

let subscriptions = new Schema ({
   email:  { type: String, trim: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] }
}, {
   timestamps: true /* creates corresponding timestamp fields: createdAt, updatedAt */
})

module.exports = mongoose.model('subscriptions', subscriptions)