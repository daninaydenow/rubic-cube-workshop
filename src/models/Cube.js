const mongoose = require('mongoose');
const cubeSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true
    },
    description: {
       type: String,
       required: true,
       maxlength: 100
    },
    imageUrl: {
      type: String,
      required: true,
      // validate: [/^https?:\/\//i, 'Invalid image url']
      validate: {
        validator: function(v) {
          return /^https?:\/\//i.test(v);
        },
        message: (props) =>  `Image URL ${props.value} is invalid`
      }
    },
    difficulty: {
      type: Number,
      required: true,
      min: 1,
      max: 6,
    }

});

// cubeSchema.path('imageUrl').validate(function(value) {
//   return /^https?:\/\//i.test(v);
// });
const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube;