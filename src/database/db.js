const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/web-app');
module.exports = {Mongoose: mongoose};