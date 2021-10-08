const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username cannot be shorter than 5 characters']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Your password should be atleast 6 symbols']

    },
    
});

userSchema.pre('save', function(next){
 console.log(this);
 bcrypt.hash(this.password, 10)
 .then(hash => {
     this.password = hash;
     next();
 })
});

userSchema.static('findByUsername', function(username) {
    return this.findOne({username});
})

userSchema.method('validatePassword', function(password) {
    return bcrypt.compare(password, this.password);
});
const User = mongoose.model('User', userSchema);

module.exports = User;