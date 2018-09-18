const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const PLM      = require('passport-local-mongoose')

const userSchema = new Schema({
  username: String,
  email: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'upadted_at'
  }
})

userSchema.plugin(PLM, {usernameField: 'email'})

module.exports = mongoose.model('User', userSchema)