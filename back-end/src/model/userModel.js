const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: String,
    birthDate: Date,
    email: String,
    documentNumber: String,
    token: String,
    tokenEmail: String,
    status: Boolean,
    zipCode: String,
    address: String
});  

const laboratoryModel = mongoose.model('user', user);

module.exports = laboratoryModel;