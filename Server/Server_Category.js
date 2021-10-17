const categoryModels=require('../Models/Model_Category')
const shopModels=require('../Models/Model_Shop')

exports.get=async function getAllCategory(){
return  await categoryModels.find();
}
exports.GetInfoShop=async function GetInfoShop(id){
    return await shopModels.findById(id);
    }

