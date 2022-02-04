var express = require('express');
var router = express.Router();
let userController = require('../controllers/users');


/* GET users listing. */
router.get('/', userController.user);


router.get('/contact', userController.contact);

module.exports = router;
