const userModel = require('../model/userModel');
const getAddress = require('./zipCodeController');
const crypto = require('crypto');
const mongoose = require('mongoose');
const sendEmail = require('./emailController');
const {authentication} = require('../middleware/token');

async function createUser(req, res) {

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        const verify = await userModel.findOne({email: req.body.email});
        if(!verify) return res.status(404).send('Esse email ja esta cadastrado');

        const andrres = await getAddress(req.body.zipCode);
        if (!andrres) return res.status(404).send('Cep invalido!');

        var random = Math.random().toString();
        var current_date = (new Date()).valueOf().toString();

        const data = {
            name: req.body.name,
            email: req.body.email,
            birthDate: req.body.birthDate,
            documentNumber: req.body.documentNumber,
            token: '',
            tokenEmail: crypto.createHash('sha1').update(current_date + random).digest('hex'),
            status: false,
            zipCode: req.body.zipCode,
            address: andrres
        };
        await userModel.create(data, { session });

        const email = await sendEmail(data.email, data.nome, `Para confirmar o seu email basta confirmar esse link:`);
        if(!email)
        {
            await session.abortTransaction();
            return res.status(500).send({ message: "Ocorreu um erro ao tentar criar o usuario" });
        }

        await session.commitTransaction();
        session.endSession();

        return res.status(201).send('Exames cadastrados com sucesso');

    } catch (err) {
        return res.status(500).send(err.message);
    }
}

async function confirmEmail(req, res){
    try {
        const filter = { tokenEmail: req.params.token_email };
        const update = { status: true };

        await userModel.findOneAndUpdate(filter, update);

        return res.status(200).send({message:"Cadastro confirmado"});

    } catch (err) {
        return res.status(500).send("Ocorreu um erro ao validar o email!");
    }
}

async function login(req, res) {
    try {
        const user = await userModel.findOne({
            email: req.body.email
        });
        if (!user) return res.status(404).send('Login invalido!');
        if(!user.status) return res.status(404).send('Precisa confirmar seu email');

        const token = await authentication(user);
        await userModel.findOneAndUpdate({
            email: req.body.email,
            token: token
        });

        return res.status(200).send('Login efetuado!');
    } catch (err) {
        return res.status(500).send(err.message);
    }
}