const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

async function authentication(user) {
    const token = jwt.sign(user, process.env.SECRET, {
        expiresIn: 300
    });
    return token;
}

async function verify(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        next();
    });
}

module.exports = {authentication, verify}