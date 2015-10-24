module.exports = function(sequelize, Datatypes){
    var Profile = sequelize.define('Profile', {
        user_id:{
            allowNull: false,
            primaryKey: true,
            type: Datatypes.STRING(15)
        },
        user_type:{
            allowNull: false,
            primaryKey: true,
            type: Datatypes.INTEGER
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return Profile;
}
