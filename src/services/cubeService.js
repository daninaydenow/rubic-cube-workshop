const Cube = require('../models/Cube');

const getAll = () => Cube.getAll();

const getOne = (id) => Cube.getAll().find(x => x.id == id);

const create = (name, description, imageUrl, difficulty) => {
      const cube = new Cube(name, description, imageUrl, difficulty);
      Cube.add(cube);
};

const cubeService = {
    create,
    getAll,
    getOne
}

module.exports = cubeService;