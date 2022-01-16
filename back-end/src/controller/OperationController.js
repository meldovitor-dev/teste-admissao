const operationModel = require('../model/operationModel');
const packageModel = require('../model/packagesModel');
const userModel = require('../model/userModel');
class OperationController {

    async addToPackage(type, quantity) {
        try {
            const service = new OperationController();

            const totalMax = 50;
            const packages = await packageModel.find({
                "dateClose": null,
                "type": type
            });

            if ((packages[0].quantity + quantity) <= totalMax) {
                const newPackage = await packageModel.updateOne(packages, {
                    quantity: quantity
                });
                if (newPackage.quantity === 50) {

                    const response = await service.closedPackage(newPackage._id);

                    if (!response) return false;

                    await packageModel.create({
                        quantity: 0,
                        type: type,
                        dateOpen: new Date(),
                        dateClose: null,
                        dateCreate: new Date()
                    })
                }
            } else {}

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    async closedPackage(id) {
        try {
            const filter = {
                packageId: id
            };

            await packageModel.findByIdAndUpdate(id, {
                dateClose: new Date()
            });

            await operationModel.updateOne(filter, {
                progress: "closed"
            });

        } catch (err) {
            return false;
        }

    }

    async createOperation(req, res) {
        try {
            const service = new OperationController();

            const user = await userModel.findOne({
                documentNumber: req.params.documentNumber
            });

            const operation = await operationModel.create({
                userDocumentNumber: user._id,
                packageId: null,
                amount: req.body.amount,
                status: true,
                progress: "open",
                dateCreate: new Date()
            });

            if (!operation) return res.status(404).send('Ocorreu um erro ao gerar o pacote');

            const packages = await service.createPackage(req.body.type, operation._id);

            if (packages) {
                await operationModel.findByIdAndUpdate(operation._id, {
                    packageId: packages._id,
                    progress: "allocated"
                })
            };

            return res.status(201).send('Operacao realizada com sucesso');

        } catch (err) {
            return res.status(500).send(err.message);
        }
    }

    async getAllOperations(req, res) {
        try {
            const allOperations = await operationModel.find();

            return res.status(200).json(allOperations);

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
                if (x.userDocument === req.params.documentNumber) arrayResponse.push(x)
            });

            return res.status(200).send(arrayResponse);

        } catch (err) {
            return res.status(500).send(err.message);
        }
    }
}

module.exports = OperationController;