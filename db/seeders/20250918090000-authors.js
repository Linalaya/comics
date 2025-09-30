/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Authors', [
      {
        name: 'Стэн Ли',
        organization: 'Marvel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Джек Кирби',
        organization: 'Marvel',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Фрэнк Миллер',
        organization: 'DC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Алан Мур',
        organization: 'DC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Хадзимэ Исаяма',
        organization: 'Kodansha',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Наоко Такэути',
        organization: 'Kodansha',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Эйитиро Ода',
        organization: 'Shueisha',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Артём Габрелянов',
        organization: 'Bubble',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Роман Котков',
        organization: 'Bubble',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authors', null, {});
  },
};
