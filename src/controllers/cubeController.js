const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubeService');

const getCreateCubePage = (req, res) => {
    let cubes = cubeService.getAll();
    console.log(cubes);
     res.render('create');
}

const createCube = (req, res) => {
       let {name, description, imageUrl, difficulty} = req.body;
       cubeService.create(name, description, imageUrl, difficulty);
       res.redirect('/cube/create'); 
    }

const getCubeDetails = (req, res) => {
     let cube = cubeService.getOne(req.params.cubeId);
     res.render('details', {...cube});
}

router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId', getCubeDetails);

module.exports = router;