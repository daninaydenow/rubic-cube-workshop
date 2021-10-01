const uniqid = require('uniqid');
class Cube {
    static #cubes = [
        {
            id: 'asdasdasdasdakljvlajs;da',
            name: 'Mirror Cube',
            description: 'Strange cube',
            imageUrl: 'https://m.media-amazon.com/images/I/41KNQRXAYvL._AC_SY580_.jpg',
            difficulty: '4'
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