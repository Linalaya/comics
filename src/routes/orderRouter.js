import express from 'express';
import { Book, Order } from '../../db/models';

const orderRouter = express.Router();

orderRouter.get('/', async (req, res) => {
  if (!res.locals.user) return res.redirect('/login');
  const orders = await Order.findAll({
    where: { userId: res.locals.user.id },
    include: [
      {
        model: Book,
        through: { attributes: ['quantity'] },
      },
    ],
  });
  return res.render('OrdersPage', { orders });
});

export default orderRouter;
