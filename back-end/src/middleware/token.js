const jwt = require('jsonwebtoken');
require("dotenv").config();

const generateToken = (user) => {
    const token = jwt.sign({email:user}, process.env.SECRET, {
        expiresIn: 300
    });
    return token;
}

const verify = (req, res, next) =>{
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send('No token provided.');

    jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).send('Failed to authenticate token.');
        next();
    });
}

module.exports = generateToken && verify;