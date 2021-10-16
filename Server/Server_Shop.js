const shopModels=require('../Models/Model_Shop')

exports.get=async function getShop(){
    console.log('Call Server Shop');
return  await shopModels.find();
}

//SELECT BY DETAIL
exports.getShopDetail=async function getShopDetail(idshop){
    return await shopModels.findById(idshop);
    }

exports.getShopSearch=async function getShopSearch(tSearch){
    return await shopModels.find({ $text: {$search: tSearch} });
    
    }