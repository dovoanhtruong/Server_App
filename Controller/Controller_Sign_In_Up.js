const UserService=require('../Server/Server_Sign_In_Up')
const bcrypt = require('bcryptjs')


exports.login=async function login(username,password){
    console.log("Call Controller Login");
    const user =await UserService.login(username)
    if(!user){
        return null
    }
    const checkPass =await bcrypt.compare(password,user.password)
    if(!checkPass){
        return null
    }
    return {id: user._id, username: user.username}
    }

exports.register=async function register(username,password,password_confirmation,phonenumber,address,email,token){
    console.log("Call Controller REGISTER");
   if(password != password_confirmation){
        return null
     }
    let user =await UserService.login(username)
        if(user){
            return null
        }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user = await UserService.register(username,phonenumber,hash,address,email,token)
    return {id: user._id}
    }
