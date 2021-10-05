const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubeService');

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
     res.render('details', {...cube});
}



router.get('/create', getCreateCubePage);
router.post('/create', createCube);
router.get('/:cubeId', getCubeDetails);


module.exports = router;