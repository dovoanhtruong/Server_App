const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const foodSchema =new Schema({
    id: {type: ObjectId},
    namefood:{type:String},
    imageimagefood: {type: String},
    idcategory: {type: String},
    idshop: {type: String},
    notefood: {type: String},
    pricefood: {type: Number},
    status: {type: Boolean}
})

module.exports = mongoose.model('food',foodSchema)