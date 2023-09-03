// importing required packages
const express = require('express');
const router = express.Router();
const weekViewController = require('../controllers/weekView');
const homeController = require('../controllers/home');

// setting up routes (for daily view)
router.get('/dailyView',homeController.home);
router.post('/createHabit',homeController.create);
router.get('/toggleStatus',homeController.toggleStatus);
router.get('/deleteHabit/:id',homeController.delete);

// setting up routes (for weekly view)
router.get('/weeklyView', weekViewController.weekView);
router.get('/weeklyView/toggleStatus', weekViewController.toggleStatus);


module.exports = router;