const express = require('express');
const verify = require('../middleware/token')
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
router.delete('/usuario/desativar', verify, serviceUser.deleteUser);

router.post('/admin/cadastro', serviceAdmin.createAdmin);
router.post('/admin/login', serviceAdmin.login);
router.put('/usuario/resert', serviceAdmin.resetPassword);

module.exports = router;