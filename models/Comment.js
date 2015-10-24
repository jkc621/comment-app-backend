module.exports = function(sequelize, Datatypes){
    var Comment = sequelize.define('Comment', {
        comment_id: {
            allowNull: false,
            defaultValue: sequelize.UUIDV1,
            primaryKey: true,
            type: Datatypes.UUID,
            validate: {
                isUUID: 1
            }
        },
        parent_comment_id: {
            allowNull: true,
            defaultValue: null,
            type: Datatypes.UUID,
            validate:{
                isUUID: 1
            }
        },
        comment_text: {
            allowNull: false,
            type: Datatypes.TEXT,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        page_url: {
            allowNull: false,
            type: Datatypes.STRING,
            validate: {
                isUrl: true
            }
        },
        creator_id: {
            allowNull: false,
            type: Datatypes.STRING(15)
        }
    }, {
        timestamps: true,
        underscored: true
    });

    return Comment;
}
