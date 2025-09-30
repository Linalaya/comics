import express from 'express';
import {
  User, Book, Author,
} from '../../db/models';

const favoriteRouter = express.Router();

favoriteRouter.get('/', async (req, res) => {
  const userWithBooks = await User.findByPk(res.locals.user.id, {
    include: {
      model: Book,
      include: [Author],
    },
  });
  res.render('FavoritesPage', { favoritesComics: userWithBooks.Books });
});

export default favoriteRouter;
