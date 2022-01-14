const express = require('express');
const verify = require('../middleware/token')
const swagger = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');
const UserController = require('../controller/UserController');
const AdminController = require('../controller/AdminController');
const OperationController = require('../controller/OperationController');

const router = express.Router();
const serviceAdmin = new AdminController();
const serviceUser = new UserController();
const serviceOperation = new OperationController();

router.post('/usuario/cadastro', verify, serviceUser.createUser);
router.get('/usuario/buscar', verify, serviceUser.getUsers);
router.put('/usuario/atualizar', verify, serviceUser.updateUser);
router.delete('/usuario/desativar/:documentNumber', verify, serviceUser.deleteUser);

router.post('/admin/cadastro', serviceAdmin.createAdmin);
router.post('/admin/login', serviceAdmin.login);
router.put('/usuario/senha', serviceAdmin.resetPassword);

router.get('/', swagger.serve, swagger.setup(swaggerFile));
router.get('/teste', serviceOperation.addToPackage)

module.exports = router;