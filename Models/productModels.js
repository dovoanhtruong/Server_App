const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema =new Schema({
    id: {type: ObjectId},
    image:{type:String},
    name: {type: String},
    info:{type:String},
    count:{type:Number},
    price:{type:Number},
    classify:{type:String}
})

module.exports = mongoose.model('product',productSchema)
