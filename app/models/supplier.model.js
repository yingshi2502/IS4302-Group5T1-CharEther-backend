module.exports = (sequelize, Sequelize) => {
    const Supplier = sequelize.define('supplier', {
        supplierId: {
            type: Sequelize.INTEGER
        },
        address: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING(2000)
        }
    });
    return Supplier;
}