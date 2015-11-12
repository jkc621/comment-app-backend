module.exports = function(sequelize, Datatypes){
    var Subscription = sequelize.define('Subscription', {
        subscription_id: {
            allowNull: false,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true,
            type: Datatypes.UUID,
            validate: {
                isUUID: 1
            }
        },
        site_id: {
            allowNull: false,
            type: Datatypes.UUID
        }
    }, {
        classMethods: {
            associate: function(models){
                Subscription.belongsTo(models.Profile, {foreignKey: 'profile_id'});
            }
        },
        timestamps: true,
        underscored: true
    });

    return Subscription;
}
