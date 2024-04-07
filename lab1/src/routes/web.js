const express = require('express');
const router = express.Router();
const { homeController, loginController, handleLogin, handleLicensePlates } = require('../controllers/homeController');

// create route
router.get('/home', homeController);
router.get('/login', loginController);
router.post('/login', handleLogin);
router.get('/licensePlates', handleLicensePlates);
router.post('/licensePlates', handleLicensePlates);
module.exports = router;
