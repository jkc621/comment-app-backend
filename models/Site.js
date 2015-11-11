module.exports = function(sequelize, Datatypes){
    var Site = sequelize.define('Site', {
        site_id: {
            allowNull: false,
            defaultValue: sequelize.UUIDV1,
            primaryKey: true,
            type: Datatypes.UUID
        },
        name: {
            allowNull: false,
            type: Datatypes.STRING
        },
        url: {
            allowNull: false,
            type: Datatypes.STRING,
            validate: {
                isUrl: true
            }
        },
        description: {
            type: Datatypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models){
                Site.hasMany(models.Subscription, {foreignKey: 'site_id', target_key: 'site_id'});
                Site.hasMany(models.Page, {foreignKey: 'site_id'});
            }
        },
        timestamps: true,
        underscored: true
    });

    return Site;
}
