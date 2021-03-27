const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  author: String,
  age: {
    type: Number,
    min: [0, 'young cat'],
    max: [40, 'old cat'],
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  color: String,
  weight: Number,
});

module.exports = mongoose.model('Cat', catSchema);
