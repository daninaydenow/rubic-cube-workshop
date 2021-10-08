const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username cannot be shorter than 5 characters']
    },
    password: {
        type: String,
        required: true,

    },
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;