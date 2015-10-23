var Subscription = sequelize.define('Subscription', {
    user_id: {
        allowNull: false,
        primaryKey: true,
        references: {
            model: Profile,
            key: "user_id"
        },
        type: Sequelize.STRING(15)
    }
    site_id: {
        allowNull: false,
        primaryKey: true,
        references: {
            model: Site,
            key: "site_id"
        },
        type: Sequelize.UUID
    }
}, {
    timestamps: true,
    underscored: true
})
