var Page = sequelize.Define('Page', {
    url: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
    },
    site_id: {
        allowNull: false,
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
