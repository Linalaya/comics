/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Styles', [
      {
        style: 'Супергеройский', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        style: 'Фантастика', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        style: 'Детектив', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        style: 'Фэнтези', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        style: 'Аниме', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        style: 'Приключения', createdAt: new Date(), updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Styles', null, {});
  },
};
