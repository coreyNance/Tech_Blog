const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment')

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade',
  hooks: true
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blogpost_id',
  onDelete: 'cascade',
  hooks: true
});


BlogPost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE',
  hooks: true
});


module.exports = { User, BlogPost, Comment};