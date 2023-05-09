module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    author: {
      type: DataTypes.TEXT,
    },
    text: {
      type: DataTypes.TEXT,
    },
  });

  return Comment;
};
