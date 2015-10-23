var Site = sequelize.define('Site', {
    site_id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        references: {
            model: Subscription,
            key: "site_id"
        },
        type: Sequelize.UUID
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING
    },
    url: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
    },
    description: {
        type: Sequelize.STRING
    }
}, {
    timestamps: true,
    underscored: true
})
