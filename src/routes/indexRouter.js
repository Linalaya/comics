import express from 'express';
import { Book, Favorite } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const comics = await Book.findAll();
  if (res.locals.user) {
    const favorites = await Favorite.findAll({
      where: { userId: res.locals.user.id },
      attributes: ['bookId'],
    });
    return res.render('MainPage', { comics, favorites: favorites.map(((fav) => fav.bookId)) });
  }
  return res.render('MainPage', { comics, favorites: [] });
});

export default indexRouter;
