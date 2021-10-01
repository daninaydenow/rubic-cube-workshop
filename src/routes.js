const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeControler');
const router = express.Router();

router.use(homeController);
router.use('/cube', cubeController);

module.exports = router;