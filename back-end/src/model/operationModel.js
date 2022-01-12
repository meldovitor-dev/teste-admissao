const mongoose = require('mongoose');

const operation = new mongoose.Schema({
    userId: String,
    packageId: String,
    amount: Number,
    user: {
        name: String,
        birthDate: String,
        documentNumber: String,
        zipCode: String,
        address: String,
        city: String,
        uf: String,
        district: String
    },
    status: String,
    progress: String,
    dateCreate: Date
});  

const operationModel = mongoose.model('operation', operation);

module.exports = operationModel;