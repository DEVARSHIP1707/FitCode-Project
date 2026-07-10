const express =require('express')
const { login, signup } = require('../Controllers/usercontroller')
const router = express.Router()

//login
router.post('/login',login)



//signup
router.post('/signup',signup)






module.exports=router