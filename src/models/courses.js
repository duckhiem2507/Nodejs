const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const course = new Schema({
    name: {type:String , default:''},
    description: {type:String , default:''},
    createdAt: {type:Date , default:Date.now},
    updatedAt: {type:Date , default:Date.now},
  });
  module.exports = mongoose.model('course',course );