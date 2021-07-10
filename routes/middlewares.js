const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) => {
    console.log(req.headers["Authorization"]);
    if(!req.headers["Authorization"]) {
        return res.status(401).json({ error: 'Necesitas incluir el token en la cabecera' });
    }
    
    const usuarioToken = req.headers["Authorization"];
    let payload = {};
    
    try {
        payload = jwt.decode(usuarioToken, 'jZKnKkRvQZ');
    } catch (err) {
        return res.status(401).json({ error: 'El token es incorrecto', err});
    }

    if(payload.expiredAt < moment().unix()) {
        return res.status(401).json({ error: 'El token ha expirado' });
    }

    req.id_usuario = payload.id_usuario;

    next();
}

module.exports = {
    checkToken: checkToken
}