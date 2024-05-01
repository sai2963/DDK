const User = require("../models/user.model");
const authUtil=require('../util/authentication')

function getSignup(req, res) {

  const csrfToken = req.csrfToken();

  res.render("customer/auth/signup", { csrfToken });
}
function getLogin(req, res) {
  res.render("customer/auth/login");
}
function getHome(req,res){
  res.render("customer/products/All-Products")
}
async function signup(req, res) {

  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullName,
    req.body.street,
    req.body.postalCode,
    req.body.city
  );
 await user.signup();
 res.redirect('/login');
}

async function login(req,res){
    const user=new User(req.body.email,req.body.password);
    const existingUser=await user.getUSerWithSameEmail();
    if(!existingUser){
      res.redirect('/login')
      return;
    }
    const passwordIsCorrect=await user.hasMatchingPassword(existingUser.password);
    if(!passwordIsCorrect){
      res.redirect('/login')
    }

    authUtil.createUserSession(req, existingUser,function(){
      res.redirect('/');
    });
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  getHome:getHome,
  signup: signup,
  login:login

};
