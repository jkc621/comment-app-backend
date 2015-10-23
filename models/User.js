var User = sequelize.define('User', {
    user_id: {
        allowNull: false,
        primaryKey: true,
        references: {
            model: Profile,
            key: "user_id"
        },
        type: Sequelize.STRING(15)
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    }
}, {
    timestamps: true,
    underscored: true
})
