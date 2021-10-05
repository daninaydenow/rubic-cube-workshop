const router = require('express').Router({mergeParams: true});
const accessoryService = require('../services/accessoryService');
const cubeService = require('../services/cubeService');

router.get('/add', async (req, res) => {
       let cube = await cubeService.getOne(req.params.cubeId);
       let accessories = await accessoryService.getAll();
       res.render('cube/accessory/add', {cube, accessories});
});

module.exports = router;