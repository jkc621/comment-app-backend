module.exports = function(sequelize, Datatypes){
    var Profile = sequelize.define('Profile', {
        profile_id: {
            allowNull: false,
            defaultValue: sequelize.UUIDV1,
            primaryKey: true,
            type: Datatypes.UUID,
            validate: {
                isUUID: 1
            }
        },
        user_id:{
            allowNull: false,
            type: Datatypes.STRING(15)
        },
        user_type:{
            allowNull: false,
            type: Datatypes.INTEGER
        }
    }, {
        classMethods: {
            associate: function(models){
                Profile.hasMany(models.Subscription, {foreignKey: 'profile_id'});
                Profile.hasMany(models.Comment, {foreignKey: 'creator_id'});
                Profile.belongsTo(models.User, {foreignKey: 'user_id', target_key: 'user_id'});
            }
        },
        timestamps: true,
        underscored: true
    });

    return Profile;
}
