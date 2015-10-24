module.exports = function(sequelize, Datatypes){
    var User = sequelize.define('User', {
        user_id: {
            allowNull: false,
            primaryKey: true,
            type: Datatypes.STRING(15)
        },
        email: {
            type: Datatypes.STRING,
            validate: {
                isEmail: true
            }
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return User;
}
