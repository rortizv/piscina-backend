const Sequelize = require('sequelize');
const mysql = require('mysql2');
const ReservasModel = require('./models/reservas');
const RolesModel = require('./models/roles');
const UserModel = require('./models/users');

const sequelize = new Sequelize('unicartagena_programaciondistribuida', 'rortiz', 'rafa_2020', {
    host: 'mysql.unicartagena.co',
    dialect: 'mysql'
});

var con = mysql.createConnection({
    host: "mysql.unicartagena.co",
    database: "unicartagena_programaciondistribuida",
    user: "rortiz",
    password: "rafa_2020"
});

const Reserva = ReservasModel(sequelize, Sequelize);
const Roles = RolesModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Reserva,
    Roles,
    con,
    User,
    sequelize
}