const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');

const router = require('../src/router/index');
const conection = require('../src/data/connection');


const app = express();
conection();

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(router);
app.listen(process.env.PORT || 8080);