module.exports = (sequelize, type) => {
    return sequelize.define('USUARIOS', {
        username: {
            type: type.STRING,
            primaryKey: true
        },
        password: type.STRING,
        torre_apto: type.STRING,
        rolename: type.STRING
    })
}