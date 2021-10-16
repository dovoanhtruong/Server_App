var express = require('express')
var router = express.Router();
var Controller_Shop = require('../Controller/Controller_Shop');
var Controller_Food = require('../Controller/Controller_Food');
const socketAPI = require('../SocketIO/socket_api');

router.get("/socket",async function(req, res, next) {
  const {msg} = req.body
  socketAPI.sendNofication(msg)
  res.status(200).json({status: true});
    });
  router.get("/socket_view",async function(req, res, next) {
  res.render('socket')
});

//SELECT ALL SHOP
router.get('/', async function(req, res, next) {
    console.log('Call API Shop');
    const Shop=await Controller_Shop.get()
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json({ ListShop: Shop });
});

//SELECT DETAIL SHOP
router.get('/shop/:idshop', async function(req, res, next) {
  const{params:{idshop}}=req
  const Food=await Controller_Food.getFoodFormShop(idshop)
  const Shop=await Controller_Shop.getShopDetail(idshop)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.json({ DetailShop: Shop ,ListFood: Food});
  
});

//SELECT FOOD BY SHOP AND CATEGORY
router.get('/shop/:idshop/:idcategory', async function(req, res, next) {
  const{params:{idshop}}=req
  const{params:{idcategory}}=req
  const Food=await Controller_Food.getFoodFormShopAndCategory(idshop,idcategory);
  res.json({ CategoryShop: Food });

});

router.get('/search/:tSearch', async function(req, res, next) {
  const{params:{tSearch}}=req
  const Shop=await Controller_Shop.getShopSearch(tSearch)
  res.json({ SearchShop: Shop });
  
});
  module.exports = router;