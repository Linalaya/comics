import express from 'express';
import { Book } from '../../db/models';

const userRouter = express.Router();

userRouter.get('/favorites', async (req, res) => {
  const comics = await Book.findAll();
  res.render('FavoritesPage', { comics });
});

export default userRouter;
