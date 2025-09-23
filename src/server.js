import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/indexRouter';
import authRouter from './routes/authRouter';
import userRouter from './routes/userRouter';
import resLocals from './middleware/resLocals';
import chekAuthorization from './middleware/chekAuthorization';
import apiAuthRouter from './routes/apiAuthRouter';
import apiFavoriteRouter from './routes/apiFavoriteRouter';

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
app.use('/api/v1/auth', apiAuthRouter);
app.use('/api/v1/favorites', apiFavoriteRouter);
app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
  console.log('Server start on', process.env.PORT);
});
