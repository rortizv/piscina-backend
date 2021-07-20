module.exports = (sequelize, type) => {
    return reservas = sequelize.define('RESERVAS', {
        id_reserva: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_reserva: type.DATEONLY,
        turno: type.STRING,
        username: {
            type: type.STRING,
            references: {
                model: 'USERS',
                key: 'torre_apto'
            }
        }
    });
}

    // reservas.associate = models => {
    //     reservas.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // }

    // reservas.associate = models => {
    //     reservas.belongsTo(models.Turnos, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    // }

    // reservas.belongsTo(Turnos);
    // reservas.belongsTo(User);