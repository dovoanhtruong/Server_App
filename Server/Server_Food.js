const foodModels=require('../Models/Model_Food')

//SELECT ALL
exports.get=async function getAllCategory(){
return  await foodModels.find();
}

//SELECT BY SHOP
exports.getFoodFormShop=async function getFoodFormShop(idshop){
    return await foodModels.find({idshop: idshop});
     }

//SELECT BY cATEGORY
exports.getFoodFormCategory=async function getFoodFormCategory(idcategory){
    return await foodModels.find({idcategory: idcategory});
     }

//SELECT BY DETAIL
exports.getFoodDetail=async function getFoodDetail(id){
    return await foodModels.findById(id);
    }
//SELECT BY cATEGORY AND SHOP
exports.getFoodFormShopAndCategory=async function getFoodFormShopAndCategory(idshop,idcategory){
    return await foodModels.find({idshop: idshop, idcategory: idcategory});
     }

exports.getFoodSearch=async function getFoodSearch(tSearch){
    return await foodModels.find({ $text: {$search: tSearch} });    
    }