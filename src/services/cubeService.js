const Cube = require('../models/Cube');

const getAll = () => Cube.getAll();

const create = (name, description, imageUrl, difficulty) => {
      const cube = new Cube(name, description, imageUrl, difficulty);
      Cube.add(cube);
};

const cubeService = {
    create,
    getAll
}

module.exports = cubeService;