import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import 'dotenv/config';
import indexRouter from './routes/indexRouter';
import authRouter from './routes/authRouter';

const app = express();
app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components/pages'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(process.env.PORT, () => {
  console.log('Server start on', process.env.PORT);
});
