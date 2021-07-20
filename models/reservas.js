const { User, Turnos } = require('../db');

module.exports = (sequelize, type) => {

    const reservas = sequelize.define('RESERVAS', {
        id_reserva: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_reserva: type.DATEONLY,
        id_turno: {
            type: type.INTEGER,
            references: {
                model: 'TURNOS',
                key: 'id_turno'
            }
        },
        username: {
            type: type.STRING,
            references: {
                model: 'USERS',
                key: 'username'
            }
        }
    });

    reservas.associate = models => {
        reservas.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    reservas.associate = models => {
        reservas.belongsTo(models.Turnos, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    // reservas.belongsTo(Turnos);
    // reservas.belongsTo(User);
}