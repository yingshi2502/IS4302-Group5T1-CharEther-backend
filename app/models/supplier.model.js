module.exports = (sequelize, Sequelize) => {
    const Supplier = sequelize.define('supplier', {
        supplierId: {
            type: Sequelize.INTEGER
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