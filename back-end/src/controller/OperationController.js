const operationModel = require('../model/operationModel');
const userModel = require('../model/userModel');
class OperationController {

    async createOperation(req, res) {
        try {
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

            await operationModel.create(objOperations);

            return res.status(201).send('Operacao realizada com sucesso');

        } catch (err) {
            return res.status(500).send(err.message);
        }
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
        
    }

    async disableOperations(req, res){
        try {
            await operationModel.findByIdAndUpdate(req.params._id, {status: false});
            return res.status(200).send('Operacao cancelada');
        } catch (err) {
            return res.status(500).send(err.message);
        }
    }
}

module.exports = OperationController;