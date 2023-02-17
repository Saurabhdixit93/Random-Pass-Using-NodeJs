const express = require('express');
const router = express.Router();


// require file to control
const password_generator = require('../controller/password_generator');
router.get('/', password_generator.password_generator);
router.post('/contact', password_generator.contact_data);
module.exports = router;