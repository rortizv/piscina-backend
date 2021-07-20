const Sequelize = require('sequelize');

const ReservasModel = require('./models/reservas');
const RolesModel = require('./models/roles');
//const TurnosModel = require('./models/turnos');
const UserModel = require('./models/users');

const sequelize = new Sequelize('unicartagena_programaciondistribuida', 'rortiz', 'rafa_2020', {
    host: 'mysql.unicartagena.co',
    dialect: 'mysql'
});

const Reserva = ReservasModel(sequelize, Sequelize);
const Roles = RolesModel(sequelize, Sequelize);
//const Turnos = TurnosModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Reserva,
    Roles,
    //Turnos,
    User
}