const mongoose = require('mongoose');
const cubeSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true,
       validate: [/^[a-zA-Z0-9\s]+$/, 'Name should only consist of english letters, digits and spaces!']
    },
    description: {
       type: String,
       required: true,
       maxlength: 100,
       minlength: 20
    },
    imageUrl: {
      type: String,
      required: true,
      validate: [/^https?:\/\//i, 'Invalid image url']
      // validate: {
      //   validator: function(v) {
      //     return /^https?:\/\//i.test(v);
      //   },
      //   message: (props) =>  `Image URL ${props.value} is invalid`
      // }
    },
    difficulty: {
      type: Number,
      required: true,
      min: 1,
      max: 6,
    },
    accessories: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
      }
    ],
    creator: {
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }

});

// cubeSchema.path('imageUrl').validate(function(value) {
//   return /^https?:\/\//i.test(v);
// });
const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube;