module.exports = (sequelize, Sequelize) => {
    const Donation = sequelize.define('donation', {
        donationId:{
            type:Sequelize.INTEGER
        },
        donor_email: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING(2000)
        }
    });
    return Donation;
}