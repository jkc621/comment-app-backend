module.exports = function(sequelize, Datatypes){
    var Page = sequelize.define('Page', {
        url: {
            allowNull: false,
            primaryKey: true,
            type: Datatypes.STRING,
            validate: {
                isUrl: true
            }
        }
    }, {
        classMethods: {
            associate: function(models){
                Page.belongsTo(models.Site, {foreignKey: 'site_id', target_key: "site_id"});
                Page.hasMany(models.Comment, {foreignKey: 'page_url'});
            }
        },
        timestamps: true,
        underscored: true
    });

    return Page;
}
