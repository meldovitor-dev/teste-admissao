const express = require('express');
const UserController = require('../controller/UserController');
const AdminController = require('../controller/AdminController');

const router = express.Router();
const serviceAdmin = new AdminController();
const serviceUser = new UserController();

router.post('/usuario/cadastro', serviceUser.createUser);
router.get('/usuario/buscar', serviceUser.getUsers);
router.put('/usuario/atualizar', serviceUser.updateUser);
router.delete('/usuario/desativar', serviceUser.deleteUser);

router.post('/admin/cadastro', serviceAdmin.createAdmin);
router.get('/admin/login', serviceAdmin.login);
router.put('/usuario/resert', serviceAdmin.resetPassword);

module.exports = router;