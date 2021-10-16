const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const shopSchema =new Schema({
    id: {type: ObjectId},
    nameshop:{type:String},
    addressshop: {type: String},
    imageshop: {type: String}
})
module.exports = mongoose.model('shop',shopSchema)