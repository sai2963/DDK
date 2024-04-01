const User = require("../models/user.model");


function getSignup(req, res) {
  res.render("customer/auth/signup");
}
function getLogin(req, res) {
  res.render("customer/auth/login");
}
async function signup(req, res) {
//   const userdata = req.body;
//   console.log(userdata);
//   const useremail = userdata.email;
//   const userpassword = userdata.password;
//   const userfullname = userdata.fullname;
//   const userstreet = userdata.street;
//   const userpostal = userdata.postalcode;
//   const usercity = userdata.city;
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postalcode,
    req.body.city
  );
 await user.signup();
 res.redirect('/login');
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
};
