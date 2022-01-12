const mongoose = require('mongoose');

const adminUser = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: String
});  

const adminModel = mongoose.model('admin', adminUser);

module.exports = adminModel;