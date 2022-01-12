const {authentication} = require('../middleware/token');
const adminModel = require('../model/adminModel');

class AdminController {

    async createAdmin(req, res) {
        try {
            const verify = await adminModel.findOne({
                email: req.body.email
            });
            if (verify) return res.status(404).send('Cliente ja cadastrado');

            const data = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                token: ""
            };

            await adminModel.create(data);

            return res.status(201).send('Cadastrado realizado com sucesso');

        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async resetPassword(req, res) {
        try {
            const filter = {
                email: req.body.email
            };
            const password = {
                password: req.body.password
            };

            await adminModel.findOneAndUpdate(filter, password);

            return res.status(204).send('Senha atualizada');
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async login(req, res) {
        try {
            const login = await adminModel.findOne({
                email: req.body.email
            });

            if (req.body.senha != login.password) return res.status(404).send('Login invalido');

            const token = await authentication(login);

            await adminModel.findByIdAndRemove({
                _id: login._id
            }, {
                token: token
            });

            return res.status(200).send('Login valido');
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }
}

module.exports = AdminController;