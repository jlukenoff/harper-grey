const mongoose = require('mongoose');

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/harper-grey';

const connection = mongoose.connect(
  MONGODB_URI,
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
