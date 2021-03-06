const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name:String,
  location:{
    type:{
      type:String,
      default:'Point'
    },
    address:String,
    coordinates:[{
      type:Number
    }]
  }
},{
  timestamps:{
    updatedAt:"updated_at",
    createdAt:"created_at"
  }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)