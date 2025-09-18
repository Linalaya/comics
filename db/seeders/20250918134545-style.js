/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Styles', [

      // ========== Автор: 1 - Стэн Ли ==========
      {
        bookId: 1, style: 'Супергеройский', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 1, style: 'Экшен', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 2, style: 'Супергеройский', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 2, style: 'Фантастика', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 3, style: 'Супергеройский', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 3, style: 'Экшен', createdAt: new Date(), updatedAt: new Date(),
      },

      // ========== Автор: 2 - Джек Кирби ==========
      {
        bookId: 4, style: 'Супергеройский', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 4, style: 'Фантастика', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 5, style: 'Супергеройский', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 5, style: 'Фантастика', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 6, style: 'Фантастика', createdAt: new Date(), updatedAt: new Date(),
      },

      // ========== Автор: 3 - Фрэнк Миллер ==========
      {
        bookId: 7, style: 'Детектив', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 7, style: 'Нуар', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 8, style: 'Самурайский', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 8, style: 'Экшен', createdAt: new Date(), updatedAt: new Date(),
      },

      // ========== Автор: 4 - Алан Мур ==========
      {
        bookId: 9, style: 'Супергеройский', createdAt: new Date(), updatedAt: new Date(),
      },

      // ========== Автор: 5 - Хадзимэ Исаяма ==========
      {
        bookId: 10, style: 'Фэнтези', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 10, style: 'Экшен', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 11, style: 'Фэнтези', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 11, style: 'Экшен', createdAt: new Date(), updatedAt: new Date(),
      },

      // ========== Автор: 6 - Наоко Такэути ==========
      {
        bookId: 12, style: 'Магия', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 12, style: 'Аниме', createdAt: new Date(), updatedAt: new Date(),
      },

      // ========== Автор: 7 - Эйитиро Ода ==========
      {
        bookId: 13, style: 'Приключения', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 14, style: 'Приключения', createdAt: new Date(), updatedAt: new Date(),
      },

      // ========== Автор: 8 - Артём Габрелянов (Bubble) ==========
      {
        bookId: 15, style: 'Детектив', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 15, style: 'Экшен', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 16, style: 'Детектив', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 16, style: 'Экшен', createdAt: new Date(), updatedAt: new Date(),
      },

      // ========== Автор: 9 - Роман Котков (Bubble) ==========
      {
        bookId: 17, style: 'Фэнтези', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 17, style: 'Приключения', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 18, style: 'Фэнтези', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        bookId: 18, style: 'Приключения', createdAt: new Date(), updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Styles', null, {});
  },
};
