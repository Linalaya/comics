import express from 'express';
import { Book, Cart } from '../../db/models';

const cartRouter = express.Router();

cartRouter.get('/', async (req, res) => {
  const cart = await Cart.findOne({
    where: { userId: res.locals.user.id },
    include: [
      {
        model: Book,
        through: { attributes: ['quantity'] },
      },
    ],
    order: [[Book, 'title', 'ASC']],
  });

  res.render('CartPage', { cart });
});

export default cartRouter;
