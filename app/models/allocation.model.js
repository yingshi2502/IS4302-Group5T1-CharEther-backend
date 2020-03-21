module.exports = (sequelize, Sequelize) => {
    const Allocation = sequelize.define('allocation', {
        allocationId: {
            type: Sequelize.INTEGER
        },
        doc: {
            type: Sequelize.BLOB('long')
        }
    });
    return Allocation;
}