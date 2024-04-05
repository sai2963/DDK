const User = require("../models/user.model");


function getSignup(req, res) {

  const csrfToken = req.csrfToken();

  res.render("customer/auth/signup", { csrfToken });
}
function getLogin(req, res) {
  res.render("customer/auth/login");
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

function login(req,res){
  
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
};
