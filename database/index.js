const mongoose = require('mongoose');

const connection = mongoose.connect(
  'mongodb://127.0.0.1/harper-grey',
  { useNewUrlParser: true }
);

const ContactSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: String,
  city: String,
  email: String,
  message: String,
  created: { type: Date, default: Date.now },
});

module.exports = {
  Contact: mongoose.model('Contact', ContactSchema),
  connection,
};
