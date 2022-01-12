const mongoose = require('mongoose');

const package = new mongoose.Schema({
    amount: Number,
    operationId: String,
    progress: String,
    dateOpen: Date,
    dateClose: Date,
    dateCreate: Date
});  

const packageModel = mongoose.model('package', package);

module.exports = packageModel;