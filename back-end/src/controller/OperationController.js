const operationModel = require('../model/operationModel');
const packageModel = require('../model/packagesModel');
const userModel = require('../model/userModel');
class OperationController {
    
    async createOperation(req, res) {
        try {
            const service = new OperationController();

            const user = await userModel.findOne({
                documentNumber: req.params.documentNumber
            });

            const objUser = {
                name: user.name,
                birthDate: user.birthDate,
                documentNumber: user.documentNumber,
                zipCode: user.zipCode,
                address: user.address,
                city: user.city,
                uf: user.uf,
                district: user.district
            };
            const objOperations = {
                userId: user._id,
                packageId: "String",
                amount: req.body.amount,
                user: objUser,
                status: true,
                progress: "open",
                dateCreate: new Date()
            };

            const operation = await operationModel.create(objOperations);

            if (!operation) return res.status(404).send('Ocorreu um erro ao gerar o pacote');

            const teste = await service.createPackage(req.body, operation._id);

            return res.status(201).send('Operacao realizada com sucesso');

        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async createPackage(dados, id) {
        const objPackage = {
            amount: dados.amount,
            operationId: id,
            progress: true,
            dateOpen: new Date(),
            dateClose: new Date(),
            dateCreate: new Date()
        };

        const pkcs = await packageModel.create(objPackage);

        return pkcs;
    }

    async getAllOperations(req, res) {
        try {
            let arrayResponse = [];

            const allOperations = await operationModel.find();

            allOperations.filter((x) => {
                if (x.status) arrayResponse.push(x);
            });

            return res.status(200).json(arrayResponse);

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    async getOperationsByUser(req, res) {
        try {
            const service = new OperationController();
            
            let arrayResponse = [];

            const operations = await service.getAllOperations();

            operations.filter((x) => {
                if (x.userId === req.params.id) arrayResponse.push(x)
            })

            return res.status(200).send(arrayResponse);

        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async disableOperations(req, res) {
        try {
            await operationModel.findByIdAndUpdate(req.params._id, {
                status: false
            });
            return res.status(200).send('Operacao cancelada');
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }
}

module.exports = OperationController;