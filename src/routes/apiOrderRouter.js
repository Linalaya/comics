import express from 'express';
import {
  Book, Cart, CartBooks, Order, OrderBooks,
} from '../../db/models';

const apiOrderRouter = express.Router();

apiOrderRouter.post('/', async (req, res) => {
  try {
    if (!res.locals.user) return res.status(401).json({ message: 'Нужно войти в аккаунт' });
    const userId = res.locals.user.id;
    // находим корзину юзера с книгами
    const cart = await Cart.findOne({
      where: { userId },
      include: [{ model: Book, through: { attributes: ['quantity'] } }],
    });

    if (!cart || cart.Books.length === 0) {
      return res.status(400).json({ message: 'Корзина пуста' });
    }

    // создаём заказ
    const order = await Order.create({ userId, status: 'Оформлен' });

    // создаём записи в OrderBooks
    const orderBooks = cart.Books.map((book) => ({
      orderId: order.id,
      bookId: book.id,
      quantity: book.CartBooks.quantity,
    }));
    await OrderBooks.bulkCreate(orderBooks);

    // очищаем корзину
    await CartBooks.destroy({ where: { cartId: cart.id } });

    return res.status(201).json({ orderId: order.id });
  } catch (err) {
    return res.status(500).json({ message: 'Ошибка оформления заказа' });
  }
});

export default apiOrderRouter;
