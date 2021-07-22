const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    // console.log("Inicia CheckToken");
    // console.log(req.headers["authorization"]);
    if(!req.headers["authorization"]) {
        return res.status(401).json({ error: 'No estás autorizado' });
    }
    
    const usuarioToken = req.headers["authorization"];
    let payload = {};
    // console.log("pasó payload");
    try {
        payload = jwt.decode(usuarioToken, 'jZKnKkRvQZ');
    } catch (err) {
        return res.status(401).json({ error: 'El token es incorrecto', err});
    }

    if(payload.expiredAt < moment().unix()) {
        return res.status(401).json({ error: 'El token ha expirado o no está autorizado' });
    }

    req.username = payload.username;
    // console.log("llegó al next");
    next();
}

module.exports = {
    checkToken: checkToken
}