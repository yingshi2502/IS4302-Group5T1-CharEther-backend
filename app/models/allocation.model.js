module.exports = (sequelize, Sequelize) => {
    const Allocation = sequelize.define('allocation', {
        allocationId: {
            type: Sequelize.INTEGER
        },
        fileName:{
            type:Sequelize.STRING
        },
        fileType:{
            type:Sequelize.STRING
        },
        doc: {
            type: Sequelize.BLOB('long')
        },
        description:{
            type:Sequelize.STRING
        }

    });
    return Allocation;
}