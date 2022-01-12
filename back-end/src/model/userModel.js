const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: String,
    birthDate: Date,
    documentNumber: String,
    status: Boolean,
    zipCode: String,
    address: String
});  

const userModel = mongoose.model('user', user);

module.exports = userModel;