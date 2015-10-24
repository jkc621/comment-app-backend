module.exports = function(sequelize, Datatypes){
    var Page = sequelize.define('Page', {
        url: {
            allowNull: false,
            primaryKey: true,
            type: Datatypes.STRING,
            validate: {
                isUrl: true
            }
        },
        site_id: {
            allowNull: false,
            type: Datatypes.UUID
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return Page;
}
