module.exports = (sequelize, type) => {
    return sequelize.define('RESERVAS', {
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
        torre_apto: {
            type: type.STRING,
            references: {
                model: 'USUARIOS',
                key: 'username'
            }
        }
    })
}