const ShopServer=require('../Server/Server_Shop')

exports.get=async () =>{
    console.log('Call Controller Shop');
return await ShopServer.get();
}

exports.getShopDetail=async (idshop)=>{
    return await ShopServer.getShopDetail(idshop);
    }

exports.getShopSearch=async (tSearch)=>{
    return await ShopServer.getShopSearch(tSearch);
    }