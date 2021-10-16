var express = require('express')
var router = express.Router();
var Controller_Food = require('../Controller/Controller_Food');
const socketAPI = require('../SocketIO/socket_api')

router.get("/socket",async function(req, res, next) {
  const {msg} = req.body
  socketAPI.sendNofication(msg)
  res.status(200).json({status: true});
    });
  router.get("/socket_view",async function(req, res, next) {
  res.render('socket')
});

router.get('/', async function(req, res, next) {
    const Food=await Controller_Food.get()
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json({ food: Food });
});


router.get("/shop/:idshop",async function(req, res, next) {
    console.log('Call API  id shop');
    const{params:{idshop}}=req
    const Food=await Controller_Food.getFoodFormShop(idshop)
    res.json({ ListFood: Food });
  });

  router.get("/category/:idcategory",async function(req, res, next) {
    const{params:{idcategory}}=req
    const Food=await Controller_Food.getFoodFormCategory(idcategory)
    res.json({ ListFood: Food });
  });

  router.get("/food/:id",async function(req, res, next) {
    const{params:{id}}=req
    const Food=await Controller_Food.getFoodDetail(id)
    res.json(Food);
  });

  router.get('/search/:tSearch', async function(req, res, next) {
    const{params:{tSearch}}=req
    const Food=await Controller_Food.getFoodSearch(tSearch)
    res.json({ SearchFood: Food });
    
  });

  module.exports = router;