const router = require('express').Router();
const apiReservasRouter = require('./api/reservas');
const apiUsuariosRouter = require('./api/usuarios');
const apiRolesRouter = require('./api/roles');
const apiTurnosRouter = require('./api/turnos');


router.use('/reservas', apiReservasRouter);
router.use('/usuarios', apiUsuariosRouter);
router.use('/roles', apiRolesRouter);
router.use('/turnos', apiTurnosRouter);


module.exports = router;