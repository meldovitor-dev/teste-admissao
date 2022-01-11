const mongoose = require('mongoose');
require('dotenv/config');

mongoose.Promise = global.Promise;

const conection = async () => {

    const db = mongoose.connection;
    const host = process.env.HOST;

    const client = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.connect(host, client);

    db.on('error', (err) => console.log(err));
    db.on('open', () => console.log('banco conectado'));
}

module.exports = conection;