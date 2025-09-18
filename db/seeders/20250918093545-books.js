/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [

      // ========== Автор: 1 - Стэн Ли ==========
      {
        title: 'Человек-Паук: Возвращение домой',
        description: 'История о Питере Паркерe, который пытается совмещать жизнь школьника и супергероя.',
        price: 499.00,
        imgUrl: 'https://truth.bahamut.com.tw/s01/201707/ce44c883a758c3d75a2e6210cc6fa67f.JPG',
        authorId: 1, // Стэн Ли
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Боевик',
      },
      {
        title: 'Нелюди',
        description: 'Рассказ о суперлюдях, обитающих на изолированном острове и их взаимодействии с внешним миром.',
        price: 529.00,
        imgUrl: 'https://i.pinimg.com/736x/27/0f/3c/270f3cb8dfa049d9a7c469a37020e001.jpg',
        authorId: 1, // Стэн Ли
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Экшен',
      },
      {
        title: 'Железный человек: Возрождение',
        description: 'Тони Старк возвращается к роли Железного человека после серьёзных испытаний.',
        price: 549.00,
        imgUrl: 'https://i.pinimg.com/736x/6b/43/f6/6b43f6362e1344afdddf3f08a0ff4021.jpg',
        authorId: 1, // Стэн Ли
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Боевик',
      },

      // ========== Автор: 2 - Джек Кирби ==========
      {
        title: 'Фантастическая четверка: Начало',
        description: 'Комикс про группу героев, получивших сверхспособности после космического излучения.',
        price: 599.00,
        imgUrl: 'https://comicvine.gamespot.com/a/uploads/scale_medium/6/67663/8081979-03.jpg',
        authorId: 2, // Джек Кирби
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Фантастика',
      },
      {
        title: 'Бог грома: Тор',
        description: 'Тор сражается с мифическими угрозами, защищая Асгард и людей.',
        price: 589.00,
        imgUrl: 'https://comicvine.gamespot.com/a/uploads/scale_medium/11144/111442876/8553269-crdr.jpg',
        authorId: 2, // Джек Кирби
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Фантастика',
      },
      {
        title: 'Фантастические путешествия',
        description: 'Коллекция космических приключений и открытий в стиле классического комикса.',
        price: 559.00,
        imgUrl: 'https://i.pinimg.com/originals/95/92/83/95928382dea34645aadd648f1abe3c18.jpg',
        authorId: 2, // Джек Кирби
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Фантастика',
      },

      // ========== Автор: 3 - Фрэнк Миллер ==========
      {
        title: 'Син Сити: Город греха',
        description: 'Детективная история о коррупции и преступлениях в мрачных переулках Син Сити.',
        price: 629.00,
        imgUrl: 'https://xl.movieposterdb.com/12_02/2005/401792/xl_401792_d8299415.jpg',
        authorId: 3, // Фрэнк Миллер
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Криминал',
      },
      {
        title: 'Ронин',
        description: 'Самурай без хозяина в пост-апокалиптическом Нью-Йорке — борьба и внутренний конфликт.',
        price: 649.00,
        imgUrl: 'https://i.pinimg.com/originals/7d/cc/4e/7dcc4ea6d5fd9cacfd9c50327743c19c.jpg',
        authorId: 3, // Фрэнк Миллер
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'История',
      },

      // ========== Автор: 4 - Алан Мур ==========
      {
        title: 'Хранители',
        description: 'Альтернативная история о супергероях в мире, балансирующем на грани ядерной войны.',
        price: 749.00,
        imgUrl: 'https://i.pinimg.com/550x/f6/e9/ce/f6e9ce74e4baca1016037439786b1096.jpg',
        authorId: 4, // Алан Мур
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Экшен',
      },

      // ========== Автор: 5 - Хадзимэ Исаяма ==========
      {
        title: 'Атака титанов. Том 1',
        description: 'История о человечестве, живущем за стенами, чтобы защититься от гигантских титанов.',
        price: 459.00,
        imgUrl: 'https://basket-19.wbbasket.ru/vol3097/part309721/309721763/images/c516x688/1.webp',
        authorId: 5, // Хадзимэ Исаяма
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Боевик',
      },
      {
        title: 'Атака титанов. Том 2',
        description: 'Продолжение истории: Эрен и друзья узнают больше о враге и пытаются выжить среди титанов.',
        price: 479.00,
        imgUrl: 'https://str-cnt-pub.stroki.mts.ru/str-cnt/content-azbuka/Comics/Cover/azbuka_9785389233591_9785389233591_large.jpg',
        authorId: 5, // Хадзимэ Исаяма
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Боевик',
      },

      // ========== Автор: 6 - Наоко Такэути ==========
      {
        title: 'Сейлор Мун. Том 1',
        description: 'Усаги Цукино превращается в Сейлор Мун и защищает Землю от зла.',
        price: 429.00,
        imgUrl: 'https://i.pinimg.com/736x/dc/95/b6/dc95b6822d8a3b5184377015beee2751.jpg', // пример обложки
        authorId: 6, // Наоко Такэути
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Романтика',
      },

      // ========== Автор: 7 - Эйитиро Ода ==========
      {
        title: 'Ван-Пис. Том 1',
        description: 'История о Монки Д. Луффи и его команде пиратов, ищущих сокровище Ван-Пис.',
        price: 479.00,
        imgUrl: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-2e111Vm1greaxw3nkG6nTBFbAV5RtXToDSL48mi5tXZxqexw7xdTTkbCmtPd_IjFZaY94LFMQpHTXhtjQtP_UckLICgiroxhdn3gyk_sMoAC41mlTUnmGXIG-iA_eVAE3b25yeWgKU8/s640/Volumen+5.png', // обложка тома 1 (пример)
        authorId: 7, // Эйитиро Ода
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Экшен',
      },
      {
        title: 'Ван-Пис. Том 2',
        description: 'Луффи начинает собирать команду и сталкивается с первыми серьезными противниками.',
        price: 499.00,
        imgUrl: 'https://i.pinimg.com/736x/1b/5e/f7/1b5ef765d9984dd430e375bb34275835.jpg',
        authorId: 7, // Эйитиро Ода
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Экшен',
      },

      // ========== Автор: 8 - Артём Габрелянов (Bubble) ==========
      {
        title: 'Майор Гром: Чумной Доктор',
        description: 'История про майора полиции Игоря Грома, противостоящего таинственному Чумному Доктору.',
        price: 399.00,
        imgUrl: 'https://cdn1.ozone.ru/s3/multimedia-1-m/7035022354.jpg',
        authorId: 8, // Артём Габрелянов
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Детектив',
      },
      {
        title: 'Майор Гром: Дождь патриотов',
        description: 'Продолжение приключений Майора Грома, новый злодей и личные испытания.',
        price: 429.00,
        imgUrl: 'https://cdn1.ozone.ru/s3/multimedia-1-i/7205104782.jpg', // пример
        authorId: 8, // Артём Габрелянов
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Детектив',
      },

      // ========== Автор: 9 - Роман Котков (Bubble) ==========
      {
        title: 'Экслибриум',
        description: 'Молодая девушка Лилия узнаёт, что миры книг реальны и ей предстоит их защищать.',
        price: 379.00,
        imgUrl: 'https://avatars.mds.yandex.net/get-mpic/12535611/2a000001920fa13a0ef080eb89fd2b3d8206/orig',
        authorId: 9, // Роман Котков
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Приключения',
      },
      {
        title: 'Экслибриум: Лабиринт отражений',
        description: 'Лилия попадает в лабиринт миров-отражений, где ей предстоит понять, кто истина, а кто маска.',
        price: 399.00,
        imgUrl: 'https://takapulta.ru/wp-content/uploads/2020/11/a50edd09171f56181b0d6955f37cec45-768x1175.jpg',
        authorId: 9, // Роман Котков
        createdAt: new Date(),
        updatedAt: new Date(),
        style: 'Приключения',
      },

    ], {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
