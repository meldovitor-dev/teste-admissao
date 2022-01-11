const nodemail = require('nodemailer');
require('dotenv/config');

async function enviarEmail(email, nome, body) {
    let trasnportador = nodemail.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.SENHA,
        },
    });

    let corpo = {
        from: "vitorv6@outlook.com",
        to: email,
        subject: assunto,
        text: `Ola ${nome}, ${body}`
    };

    await trasnportador.sendMail(corpo, (err, info) => {
        if (err) return false;
        return true;
    });
}

module.exports = enviarEmail;