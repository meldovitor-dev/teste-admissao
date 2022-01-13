const express = require('express');
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');
require('dotenv/config');

const router = require('../src/router/index');
const conection = require('../src/data/connection');
const swaggerFile = require('./swagger.json');

const app = express();
conection();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', swagger.serve, swagger.setup(swaggerFile));
app.use(router);
app.listen(process.env.PORT || 8080);