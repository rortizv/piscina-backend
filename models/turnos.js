module.exports = (sequelize, type) => {
    return sequelize.define('TURNOS', {
        id_turno: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        turno_txt: type.STRING
    })
}