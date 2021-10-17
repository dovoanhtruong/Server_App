const CategoryServer=require('../Server/Server_Category')

exports.get=async () =>{
return await CategoryServer.get();
}

exports.GetInfoShop=async (id)=>{
    return await CategoryServer.GetInfoShop(id);
    }
