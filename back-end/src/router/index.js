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

router.post('/usuario/cadastro', verify, serviceUser.createUser);
router.get('/usuario/buscar', verify, serviceUser.getUsers);
router.put('/usuario/atualizar/:documentNumber', verify, serviceUser.updateUser);
router.delete('/usuario/desativar/:documentNumber', verify, serviceUser.deleteUser);

router.post('/admin/cadastro', serviceAdmin.createAdmin);
router.post('/admin/login', serviceAdmin.login);

router.get('/operacoes/buscar', verify, serviceOperation.getAllOperations);
router.post('/operacoes/criar', verify, serviceOperation.createOperation);

router.get('/pacotes/buscar', verify, serviceOperation.getAllPackages);

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument));

module.exports = router;