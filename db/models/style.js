const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Style extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Book, { foreignKey: 'styleId' });
    }
  }
  Style.init({
    style: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Style',
  });
  return Style;
};
