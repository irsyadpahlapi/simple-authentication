const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Userschema = new Schema({
  email:String,
  password:String
},{timestamps:true})

const User = mongoose.model('User',Userschema)

module.exports = User;
