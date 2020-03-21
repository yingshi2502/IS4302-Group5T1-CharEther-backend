module.exports = (sequelize, Sequelize) => {
    const ProjectImage = sequelize.define('project_image', {
        projectId: {
            type: Sequelize.INTEGER
        },
        caption: {
            type: Sequelize.STRING
        },
        image: {
            type: Sequelize.BLOB('long')
        }
    });
    return ProjectImage;
}