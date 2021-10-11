const Accessory = require('../models/Accessory');

async function create(name, description, imageUrl) {
    return Accessory.create({name, description, imageUrl});
}

async function getAll() {
    return Accessory.find({}).lean();
}

async function getAllWithout(accessoriIds) {
    return Accessory.find({_id: {$nin: accessoriIds}}).lean();
}

const accessoryService = {
    create,
    getAll,
    getAllWithout
}

module.exports = accessoryService;