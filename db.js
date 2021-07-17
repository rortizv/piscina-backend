const Sequelize = require('sequelize');

const UsuariosModel = require('./models/usuarios');
const ReservasModel = require('./models/reservas');
const RolesModel = require('./models/roles');
const TurnosModel = require('./models/turnos');
const UserModel = require('./models/users');

const sequelize = new Sequelize('unicartagena_programaciondistribuida', 'rortiz', 'rafa_2020', {
    host: 'mysql.unicartagena.co',
    dialect: 'mysql'
});

const Usuario = UsuariosModel(sequelize, Sequelize);
const Reserva = ReservasModel(sequelize, Sequelize);
const Roles = RolesModel(sequelize, Sequelize);
const Turnos = TurnosModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Usuario,
    Reserva,
    Roles,
    Turnos,
    User
}