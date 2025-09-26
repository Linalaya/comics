import express from 'express';
import { Cart, CartBooks } from '../../db/models';

const apiCartRouter = express.Router();

apiCartRouter.post('/:bookId', async (req, res) => {
  if (!res.locals.user) return res.status(401).json({ message: 'Нужно войти в аккаунт' });
  const [cart, created] = await Cart.findOrCreate({
    where: { userId: res.locals.user.id },
  });
  const [cartBooks, created2] = await CartBooks.findOrCreate({
    where: { cartId: cart.id, bookId: req.params.bookId },
  });
  if (!created2) return res.status(400).json({ message: 'Книга уже в корзине' });
  return res.sendStatus(200);
});

apiCartRouter.patch('/', async (req, res) => {
  if (!res.locals.user) return res.status(401).json({ message: 'Нужно войти в аккаунт' });
  const { quantity, bookId } = req.body;
  const cart = await Cart.findOne({ where: { userId: res.locals.user.id } });
  if (!cart) {
    return res.status(404).json({ message: 'Корзина не найдена' });
  }
  await CartBooks.update(
    { quantity },
    { where: { cartId: cart.id, bookId } },
  );
  return res.sendStatus(200);
});

apiCartRouter.delete('/:itemId', async (req, res) => {
  if (!res.locals.user) return res.status(401).json({ message: 'Нужно войти в аккаунт' });
  const bookId = req.params.itemId;
  const cart = await Cart.findOne({ where: { userId: res.locals.user.id } });
  if (!cart) {
    return res.status(404).json({ message: 'Корзина не найдена' });
  }
  await CartBooks.destroy({ where: { cartId: cart.id, bookId } });
  return res.sendStatus(200);
});

export default apiCartRouter;
