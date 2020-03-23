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
        start_time:{
            type:Sequelize.DATE
        },
        status:{
            type:Sequelize.INTEGER
        }
    });
    return Project;
}