import express from 'express';
import { Favorite } from '../../db/models';

const apiFavoriteRouter = express.Router();

apiFavoriteRouter.post('/:bookId', async (req, res) => {
  if (!res.locals.user) return res.status(401).json({ message: 'Нужно войти в аккаунт' });
  const { bookId } = req.params;
  const userId = res.locals.user.id;
  const [, created] = await Favorite.findOrCreate({
    where: { userId, bookId },
  });
  if (!created) return res.status(400).json({ message: 'Уже в избранном' });
  return res.sendStatus(200);
});

apiFavoriteRouter.delete('/:bookId', async (req, res) => {
  if (!res.locals.user) return res.status(401).json({ message: 'Нужно войти в аккаунт' });
  const { bookId } = req.params;
  const userId = res.locals.user.id;
  const favorite = await Favorite.findOne({ where: { userId, bookId } });
  if (!favorite) return res.status(400).json({ message: 'Уже удален из избранного' });
  await favorite.destroy();
  return res.sendStatus(200);
});

export default apiFavoriteRouter;
