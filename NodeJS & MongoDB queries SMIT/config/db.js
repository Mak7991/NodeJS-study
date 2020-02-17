const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://test:test@cluster0-ytzvp.mongodb.net/expertizo?retryWrites=true&w=majority";

mongoose.connect(mongoURI);

module.exports = mongoose;