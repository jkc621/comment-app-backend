var Profile = sequelize.define('Profile', {
    user_id:{
        allowNull: false,
        primaryKey: true,
        references: {
            model: User,
            key: "user_id"
        },
        type: Sequelize.STRING(15)
    },
    user_type:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: true,
    underscored: true    
})
