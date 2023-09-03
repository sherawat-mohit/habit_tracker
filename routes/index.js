// importing required packages
const express = require('express');
const startPageController = require('../controllers/startPage');

const router = express.Router();

router.get('/', startPageController.home);
router.use('/habits', require('./habits'));


module.exports = router;