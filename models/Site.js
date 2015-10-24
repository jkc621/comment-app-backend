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
        timestamps: true,
        underscored: true
    });

    return Site;
}
