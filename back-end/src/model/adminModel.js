const mongoose = require('mongoose');

const adminUser = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: String,
    dateCreate: Date
});  

const adminModel = mongoose.model('admin', adminUser);

module.exports = adminModel;