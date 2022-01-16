const {generateToken} = require('../middleware/token');
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
                token: "",
                dateCreate: new Date()
            };

            await adminModel.create(data);

            return res.status(201).send('Cadastrado realizado com sucesso');

        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async login(req, res) {
        try {
            const login = await adminModel.findOne({
                email: req.body.email
            });

            if (!login || req.body.password != login.password || req.body.email != login.email) return res.status(404).send('Login invalido');

            const token = await generateToken(login.email);

            await adminModel.findByIdAndUpdate({
                _id: login._id
            }, {
                token: token
            });

            return res.status(200).send(token);
            
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }
}

module.exports = AdminController;