var express = require('express')
var router = express.Router();
var Controller_Category = require('../Controller/Controller_Category');
const socketAPI = require('../SocketIO/socket_api')

router.get('/', async function(req, res, next) {
    const Category=await Controller_Category.get()
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.json({ category: Category });
});


router.get("/:id",async function(req, res, next) {
  const{params:{id}}=req
  const InfoShop=await Controller_Category.GetInfoShop(id)
  res.json({ infoShop: InfoShop});
});

  module.exports = router;