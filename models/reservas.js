module.exports = (sequelize, type) => {
    return reservas = sequelize.define('RESERVAS', {
        id_reserva: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha_reserva: type.DATE,
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