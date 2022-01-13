const userModel = require('../model/userModel');
const getAddress = require('./zipCodeController');

class UserController {

    async createUser(req, res) {
        try {
            const verify = await userModel.findOne({
                documentNumber: req.body.documentNumber
            });

            if (verify) {
                if (verify.documentNumber === req.body.documentNumber) return res.status(404).send('Cliente ja cadastrado!');

                await userModel.findByIdAndUpdate(verify._id, {
                    status: true
                })

                return res.status(200).send('Usuario reativado');
            }


            const andrres = await getAddress(req.body.zipCode);
            if (!andrres) return res.status(404).send('Cep invalido!');

            const data = {
                name: req.body.name,
                birthDate: req.body.birthDate,
                documentNumber: req.body.documentNumber,
                status: true,
                zipCode: req.body.zipCode,
                address: andrres.logradouro,
                city: andrres.localidade,
                uf: andrres.uf,
                district: andrres.bairro,
                dateCreate: new Date()
            };

            await userModel.create(data);

            return res.status(201).send('Cadastrado realizado com sucesso');

        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async getUsers(req, res) {
        try {
            let arrayResponse = [];

            const response = await userModel.find();
            if (!response) return res.status(400).send('Nao possui nenhum cliente cadastrado');

            response.filter((x) => {
                if (x.status) arrayResponse.push(x);
            });

            return res.status(200).json(arrayResponse);

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    async deleteUser(req, res) {
        try {
            const filter = {
                documentNumber: req.params.documentNumber
            };
            const update = {
                status: false
            };

            await userModel.findOneAndUpdate(filter, update);

            return res.status(200).send('Usuario desativado com sucesso');

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    async updateUser(req, res) {
        try {
            const filter = {
                documentNumber: req.params.documentNumber
            };

            await userModel.findOneAndUpdate(filter, req.body);

            return res.status(200).send('Usuario atualizado com sucesso');

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}


module.exports = UserController;