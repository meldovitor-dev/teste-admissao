const operationModel = require('../model/operationModel');
const packageModel = require('../model/packagesModel');
const userModel = require('../model/userModel');
class OperationController {

    async addToPackage(type, quantity) {
        try {
            const service = new OperationController();
            const amount = parseInt(quantity)
            let packages = null;
            const totalMax = 50;

            packages = await packageModel.find({
                "dateClose": null,
                "type": type
            });
            if (packages.length === 1) {
                packages = await packageModel.create({
                    quantity: amount,
                    type: type,
                    dateOpen: new Date(),
                    dateClose: null,
                    dateCreate: new Date()
                })
            };

            const verify = packages.quantity / totalMax

            if (verify <= totalMax) {
                await packageModel.updateOne(packages, {
                    quantity: amount
                });
                if (packages.quantity === 50) {

                    const response = await service.closedPackage(packages._id);

                    if (!response) return false;

                    await packageModel.create({
                        quantity: 0,
                        type: type,
                        dateOpen: new Date(),
                        dateClose: null,
                        dateCreate: new Date()
                    })
                }
                return packages
            }

        } catch (err) {
            return err;
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
                documentNumber: req.body.documentNumber
            });

            if (!user) return res.status(404).send('Usuario nao cadastrado');

            const packages = await service.addToPackage(req.body.type, req.body.amount);
            if (!packages) return res.status(404).send('Erro ao gerar o pacote');

            const operation = await operationModel.create({
                userDocumentNumber: user._id,
                packageId: null,
                amount: req.body.amount,
                status: true,
                progress: "open",
                dateCreate: new Date()
            });

            if (!operation) return res.status(404).send('Ocorreu um erro ao gerar a operacao');

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

    async getAllPackages(req, res) {
        try {
            const allPackages = await packageModel.find();

            return res.status(200).json(allPackages);

        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = OperationController;