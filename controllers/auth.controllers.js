function getSignup(req,res){
    res.render('customer/auth/signup')
}
function getLogin(req,res){
    
    res.render('customer/auth/login')
   
}
function signup(req,res){

}

module.exports={
    getSignup:getSignup,
    getLogin:getLogin,
    signup:signup,
}