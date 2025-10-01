import express from 'express';
import {
  User, Book, Author, Cart,
} from '../../db/models';

const favoriteRouter = express.Router();

favoriteRouter.get('/', async (req, res) => {
  const userWithBooks = await User.findByPk(res.locals.user.id, {
    include: {
      model: Book,
      include: [Author],
    },
  });
  const cart = await Cart.findOne({
    where: { userId: res.locals.user.id },
    include:
        {
          model: Book,
          through: { attributes: ['bookId'] },
        },
  });
  const arrayItemCart = cart ? cart.Books.map((book) => book.id) : [];
  res.render('FavoritesPage', { favoritesComics: userWithBooks.Books, arrayItemCart });
});

export default favoriteRouter;
