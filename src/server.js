import express from 'express';
import morgan from 'morgan';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/indexRouter';
import 'dotenv/config';

const app = express();
app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components/pages'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(process.env.PORT, () => {
  console.log('Server start on', process.env.PORT);
});
