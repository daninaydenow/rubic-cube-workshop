const uniqid = require('uniqid');
class Cube {
    static #cubes = [
        {
            id: 'asdasdasdasdakljvlajs;da',
            name: 'Mirror Cube',
            description: 'Strange cube',
            imageUrl: 'https://m.media-amazon.com/images/I/41KNQRXAYvL._AC_SY580_.jpg',
            difficulty: '4'
          },
          {
            id: 'as9d87a8787wye81o123',
            name: 'Ice Cube',
            description: 'Best rapper ITW',
            imageUrl: 'https://api.time.com/wp-content/uploads/2015/08/ice-cube-straight-outta-compton1.jpg?quality=85&w=1024&h=512&crop=1',
            difficulty: '6'
          }
    ];
    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;
    }
    static getAll() {
         return Cube.#cubes.slice();
    }
    static add(cube) {
        Cube.#cubes.push(cube);
    }
}

module.exports = Cube;