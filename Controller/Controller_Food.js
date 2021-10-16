const FoodServer=require('../Server/Server_Food')

//SELECT ALL
exports.get=async () =>{
    return await FoodServer.get();
    }

//SELECT FROM SHOP
exports.getFoodFormShop=async (idshop)=>{
    return await FoodServer.getFoodFormShop(idshop);
    }

//SELECT FROM CATEGORY   
exports.getFoodFormCategory=async (idcategory)=>{
    return await FoodServer.getFoodFormCategory(idcategory);
    }

//SELECT DETAIL ID
exports.getFoodDetail=async (id)=>{
    return await FoodServer.getFoodDetail(id);
    }

//SELECT FOOD BY SHOP AND CATEGORY
exports.getFoodFormShopAndCategory=async (idshop,idcategory)=>{
    return await FoodServer.getFoodFormShopAndCategory(idshop,idcategory);
    }

exports.getFoodSearch=async (tSearch)=>{
    return await FoodServer.getFoodSearch(tSearch);
    }