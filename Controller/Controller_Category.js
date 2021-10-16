const CategoryServer=require('../Server/Server_Category')

exports.get=async () =>{
return await CategoryServer.get();
}

