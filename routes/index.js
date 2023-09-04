// importing required packages
const express = require('express');
const startPageController = require('../controllers/startPage');

const router = express.Router();


router.use('/habits', require('./habits'));

router.get('/', startPageController.home);


module.exports = router;