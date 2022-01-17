const express = require('express');
const {verify} = require('../middleware/token')
const UserController = require('../controller/UserController');
const AdminController = require('../controller/AdminController');
const OperationController = require('../controller/OperationController');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const router = express.Router();
const serviceAdmin = new AdminController();
const serviceUser = new UserController();
const serviceOperation = new OperationController();

router.post('/usuario/cadastro', serviceUser.createUser);
router.get('/usuario/buscar', serviceUser.getUsers);
router.put('/usuario/atualizar', serviceUser.updateUser);
router.delete('/usuario/desativar/:documentNumber', serviceUser.deleteUser);

router.post('/admin/cadastro', serviceAdmin.createAdmin);
router.post('/admin/login', serviceAdmin.login);

router.get('/operacoes/buscar', serviceOperation.getAllOperations);
router.post('/operacoes/criar', serviceOperation.createOperation);

router.get('/pacotes/buscar', serviceOperation.getAllPackages);

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

module.exports = router;