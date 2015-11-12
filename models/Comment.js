module.exports = function(sequelize, Datatypes){
    var Comment = sequelize.define('Comment', {
        comment_id: {
            allowNull: false,
            defaultValue: Datatypes.UUIDV1,
            primaryKey: true,
            type: Datatypes.UUID,
            validate: {
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
        }
    }, {
        classMethods: {
            associate: function(models) {
                Comment.belongsTo(models.Comment, {foreignKey: 'parent_comment_id'});
                Comment.belongsTo(models.Page, {foreignKey: 'page_url', target_key: 'url'});
                Comment.belongsTo(models.Profile, {foreignKey: 'creator_id', target_key: 'user_id'});
            }
        },
        timestamps: true,
        underscored: true
    });

    return Comment;
}
