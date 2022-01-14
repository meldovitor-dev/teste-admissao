const mongoose = require('mongoose');

const package = new mongoose.Schema({
    quantity: Number,
    type: String,
    dateOpen: Date,
    dateClose: Date,
    dateCreate: Date
});  

const packageModel = mongoose.model('package', package);

module.exports = packageModel;