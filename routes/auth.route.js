const express=require("express");
const authController=require("../controllers/auth.controllers")
const router= express.Router();



router.get('/signup',authController.getSignup)
router.get('/login',authController.getLogin)
router.get('/Home',authController.getHome)
router.post('/signup',authController.signup)
router.post('/login',authController.login)

module.exports=router;