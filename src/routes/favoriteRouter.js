import express from 'express';
import { User } from '../../db/models';

const favoriteRouter = express.Router();

favoriteRouter.get('/', async (req, res) => {
  const user = await User.findByPk(res.locals.user.id);
  const favoritesComics = await user.getBooks(); // методы getBooks, addBook вызываются на
  // экземпляре и выглядят так: [глагол] + [связанная модель во множественном числе]
  res.render('FavoritesPage', { favoritesComics });
});

export default favoriteRouter;
