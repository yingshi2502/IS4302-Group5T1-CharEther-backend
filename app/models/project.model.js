module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define('project', {
        projectId: {
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING(2000)
        },
        status:{
            type:Sequelize.INTEGER
        },
        owner:{
            type:Sequelize.STRING
        }
    });
    return Project;
}