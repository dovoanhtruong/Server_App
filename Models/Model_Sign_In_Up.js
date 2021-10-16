const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema =new Schema({
    id: {type: ObjectId},
    username:{type:String},
    phonenumber:{type:String},
    password: {type: String},
    email: {type: String},
    token: {type: String},
    address: {type: String}
})

module.exports = mongoose.model('user',userSchema)