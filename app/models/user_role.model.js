module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define('user_role', {
        address: {
            type: Sequelize.STRING
        },
        role_type: {
            type: Sequelize.INTEGER
        }
    });
    return UserRole;
}
