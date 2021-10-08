const express = require('express');
const router = express.Router();

const cubeService = require('../services/cubeService');
const cubeAccessoryController = require('./cubeAccessoryControler');



const getCreateCubePage = (req, res) => {
     res.render('create');
}

const createCube = async (req, res) => {
       let {name, description, imageUrl, difficulty} = req.body;
       try{
          await cubeService.create(name, description, imageUrl, difficulty);
           res.redirect('/'); 
       }catch(err) {
           res.status(400).write(err.message);
           res.end();
       }
      
    }

const getCubeDetails = async (req, res) => {
     let cube = await cubeService.getOne(req.params.cubeId);
     res.render('cube/details', {...cube});
}

const getEditCubePage =  (req, res) => {
    res.render('cube/edit');
}
const getDeleteCubePage =  (req, res) => {
    if(!req.user) {
        return res.status(401).redirect('/404');
    }
    res.render('cube/delete');
}



router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId/edit', getEditCubePage);
router.get('/:cubeId/delete', getDeleteCubePage);
router.get('/:cubeId', getCubeDetails);
router.use('/:cubeId/accessory', cubeAccessoryController);


module.exports = router;