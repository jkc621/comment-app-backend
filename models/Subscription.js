module.exports = function(sequelize, Datatypes){
    var Subscription = sequelize.define('Subscription', {
        user_id: {
            allowNull: false,
            primaryKey: true,
            type: Datatypes.STRING(15)
        },
        site_id: {
            allowNull: false,
            primaryKey: true,
            type: Datatypes.UUID
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return Subscription;
}
