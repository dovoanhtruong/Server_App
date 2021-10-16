var express = require('express')
var router = express.Router();
var Controller_Sign = require('../Controller/Controller_Sign_In_Up');
var jwt=require('jsonwebtoken');
const socketAPI = require('../SocketIO/socket_api');
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

//REGISTER
router.post("/register",async function(req,res,next){
  console.log("Call API REGISTER");
    const {username,password,password_confirmation,phonenumber,address,email,token}=req.body;
    const user= await Controller_Sign.register(username,password,password_confirmation,phonenumber,address,email,token);
    if(user){
      res.status(200).json({status: true,user});
    }else{
      res.status(404).json({status:false,user});
    }
  });

  router.post("/login",async function(req, res, next) {
    console.log("Call API LOGIN");
    const {username,password}=req.body;
    const user =await Controller_Sign.login(username,password)
    if(user){
      const access_token=jwt.sign(user,process.env.JWT_SECRET_KEY)
      req.session.access_token=access_token
       res.status(200).json({status: true});
    }
  else{
     res.status(401).json({status: false});
  }
  });

  router.post('/test',async function(req, res, next) {

    let {body}=req
    console.log(body)
    if (body.phonenumber) {
      await
      client
      .verify
      .services(process.env.SERVICE_ID)
      .verifications
      .create({
          to: `+${body.phonenumber}`,
          channel: req.query.channel==='call' ? 'call' : 'sms' 
      })
      .then(data => {
        res.status(200).json({status: true});
          // res.status(200).send({
          //     message: "Verification is sent!!",
          //     phonenumber: body.phonenumber,
          //     data
          // })
      }) 
   } else {
    await
   res.status(400).json({status: false});
      // res.status(400).send({
      //     message: "Wrong phone number :(",
      //     phonenumber: body.phonenumber,
      //     data
      // })
   }
  });
  router.get('/verity', function(req, res, next) {
    if (req.query.phonenumber && (req.query.code).length === 4) {
      client
          .verify
          .services(process.env.SERVICE_ID)
          .verificationChecks
          .create({
              to: `+${req.query.phonenumber}`,
              code: req.query.code
          })
          .then(data => {
              if (data.status === "approved") {
                  res.status(200).json({
                    status:true,
                      message: "User is Verified!!",
                      data
                  })
              }
          })
  } else {
      res.status(400).json({
          status:false,
          message: "Wrong phone number or code :(",
          phonenumber: req.query.phonenumber,
          data
      })
  }
  });
  module.exports = router;