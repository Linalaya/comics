import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/indexRouter';
import authRouter from './routes/authRouter';
import favoriteRouter from './routes/favoriteRouter';
import cartRouter from './routes/cartRouter';
import apiAuthRouter from './routes/apiAuthRouter';
import apiFavoriteRouter from './routes/apiFavoriteRouter';
import apiCartRouter from './routes/apiCartRouter';
import apiOrderRouter from './routes/apiOrderRouter';
import orderRouter from './routes/orderRouter';
import resLocals from './middleware/resLocals';
import chekAuthorization from './middleware/chekAuthorization';

const app = express();
app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components/pages'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(cookieParser());
app.use(resLocals);

app.use('/', indexRouter);
app.use('/auth', chekAuthorization, authRouter);
app.use('/favorites', favoriteRouter);
app.use('/cart', cartRouter);
app.use('/orders', orderRouter);
app.use('/api/v1/auth', apiAuthRouter);
app.use('/api/v1/favorites', apiFavoriteRouter);
app.use('/api/v1/cart', apiCartRouter);
app.use('/api/v1/orders', apiOrderRouter);

app.listen(process.env.PORT, () => {
  console.log('Server start on', process.env.PORT);
});
