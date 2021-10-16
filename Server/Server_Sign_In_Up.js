const userModel=require('../Models/Model_Sign_In_Up')


exports.login=async function login(username){
    console.log("Call Server Login");
    console.log(username);
    const user = await userModel.findOne({username:username}, 'id username password') 
    return user
}

exports.register=async function register(username,phonenumber,password,email,token,address){
    console.log("Call Server REGISTER");
    const user = new userModel({username,phonenumber,password,email,address,token})
    return await user.save()
}
