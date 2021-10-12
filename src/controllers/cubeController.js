const express = require('express');
const router = express.Router();
const validator = require('validator');
const {body, validationResult} = require('express-validator');

const cubeService = require('../services/cubeService');
const cubeAccessoryController = require('./cubeAccessoryControler');

const {isAuth} = require('../middlewares/atuhMiddleware');
const {isOwnCube } = require('../middlewares/cubeAuthMiddleware');



const getCreateCubePage = (req, res) => {
     res.render('cube/create');
}

const createCube = async (req, res) => {
       let {name, description, imageUrl, difficulty} = req.body;
    //    if(!validator.isURL(imageUrl)) {
    //        return res.status(400).send('Invalid URL')
    //    }
       try{
          await cubeService.create(name, description, imageUrl, difficulty, req.user._id);
           res.redirect('/'); 
       }catch(err) {
        //    res.status(400).write(err.message);
        //    res.end();
        let errors = Object.keys(err.errors).map(x => err.errors[x].message);
        res.locals.errors = errors;
           res.render('cube/create');
       }
      
    }

const getCubeDetails = async (req, res) => {
     let cube = await cubeService.getOne(req.params.cubeId);
     let isOwn = cube.creator == req.user._id;
     res.render('cube/details', {...cube, isOwn});
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



router.get('/create', isAuth, getCreateCubePage);
router.post('/create', body('imageUrl').isURL(), createCube);
router.get('/:cubeId/edit', isAuth, getEditCubePage);
router.get('/:cubeId/delete', isAuth, getDeleteCubePage);
router.get('/:cubeId', isAuth, getCubeDetails);


router.use('/:cubeId/accessory', cubeAccessoryController);


module.exports = router;