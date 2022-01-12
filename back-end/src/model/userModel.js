const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: String,
    birthDate: String,
    documentNumber: String,
    status: Boolean,
    zipCode: String,
    address: String,
    city: String,
    uf: String,
    district: String,
    dateCreate: Date,
});  

const userModel = mongoose.model('user', user);

module.exports = userModel;