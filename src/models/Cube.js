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
          },
          {
            id: 'axgku9uv5vb',
            name: 'Cute Cube',
            description: 'mega cute cube',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4ka3MG1b1bUNrSQ0imTdlzTHhQXVEQ9Iuw&usqp=CAU',
            difficulty: '3'
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