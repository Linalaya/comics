import express from 'express';
import { Book, Favorite, Cart } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const comics = await Book.findAll();
  if (res.locals.user) {
    const favorites = await Favorite.findAll({
      where: { userId: res.locals.user.id },
      attributes: ['bookId'],
    });
    const cart = await Cart.findOne({
      where: { userId: res.locals.user.id },
      include: [
        {
          model: Book,
          through: { attributes: ['bookId'] },
        },
      ],
    });
    return res.render('MainPage', { comics, favorites: favorites.map(((fav) => fav.bookId)), arrayItemCart: cart.Books.map((book) => book.id) });
  }
  return res.render('MainPage', { comics, favorites: [], arrayItemCart: [] });
});

export default indexRouter;
