const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Author, { foreignKey: 'authorId' });
      this.belongsToMany(models.User, { through: models.Favorite, foreignKey: 'bookId' });
      this.belongsToMany(models.Order, { through: models.OrderBooks, foreignKey: 'bookId' });
      this.hasMany(models.Style, { foreignKey: 'bookId' });
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    imgUrl: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};
