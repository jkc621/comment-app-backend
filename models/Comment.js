var Comment = sequelize.define('Page', {
    comment_id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        type: Sequelize.UUID,
        validate: {
            isUUID: 1
        }
    },
    parent_comment_id: {
        allowNull: true,
        defaultValue: null,
        references: {
            model: Comment,
            key: "comment_id"
        },
        type: Sequelize.UUID,
        validate:{
            isUUID: 1
        }
    },
    comment_text: {
        allowNull: false,
        type: Sequelize.TEXT,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },
    page_url: {
        allowNull: false,
        references: {
            model: Page,
            key: "url"
        },
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
    },
    creator_id: {
        allowNull: false,
        references: {
            model: Profile,
            key: "user_id"
        },
        type: Sequelize.STRING(15)
    }
}, {
    timestamps: true,
    underscored: true
})
