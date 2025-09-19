import express from 'express';
import { Book } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const comics = await Book.findAll();
  res.render('MainPage', { comics });
});

export default indexRouter;
