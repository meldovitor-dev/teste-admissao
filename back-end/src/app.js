const express = require('express');
const bodyParser = require('body-parser');
const router = require('../src/router/index');
require('dotenv/config');
const conection = require('../src/data/connection');

const app = express();

conection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.listen(process.env.PORT || 8080);