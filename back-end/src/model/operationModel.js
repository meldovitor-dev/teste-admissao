const mongoose = require('mongoose');

const operation = new mongoose.Schema({
    userDocument: String,
    packageId: String,
    amount: Number,
    status: String,
    progress: String,
    dateCreate: Date
});  

const operationModel = mongoose.model('operation', operation);

module.exports = operationModel;