/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderBooks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: { tableName: 'Orders' }, key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Books', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1, // количество комиксов по умолчанию в заказе
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderBooks');
  },
};
