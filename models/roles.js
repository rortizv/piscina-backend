module.exports = (sequelize, type) => {
    return sequelize.define('ROLES', {
        id_rolename: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rolename: type.STRING
    })
}