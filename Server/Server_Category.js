const categoryModels=require('../Models/Model_Category')

exports.get=async function getAllCategory(){
return  await categoryModels.find();
}

