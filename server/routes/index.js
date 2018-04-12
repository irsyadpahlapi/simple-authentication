var express = require('express');
var router = express.Router();
const usercontrollers = require('../controllers/usercontrollers')


/* GET home page. */
router.post('/signin',usercontrollers.signin)
router.post('/signup',usercontrollers.signup)

module.exports = router;
