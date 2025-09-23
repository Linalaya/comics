import express from 'express';
import bcrypt from 'bcrypt';
import generateTokens from '../utils/generateTokens';
import { User } from '../../db/models';

const apiAuthRouter = express.Router();

apiAuthRouter.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!(username && email && password)) return res.status(400).json({ message: 'Для регистрации на сайте заполните все поля!' });
  const hashedPassword = await bcrypt.hash(password, 10);
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { username, password: hashedPassword },
  });
  if (!created) return res.status(403).json({ message: 'Пользователь с такой почтой уже зарегистрирован' });
  const userWithoutPassword = user.get();
  delete userWithoutPassword.password;
  const { access, refresh } = generateTokens({ user: userWithoutPassword });
  return res.cookie('accessToken', access, { httpOnly: true, maxAge: 1000 * 60 * 60 }) // один час
    .cookie('refreshToken', refresh, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }) // один день (сутки)
    .sendStatus(200);
  // время в maxAge передаётся в милисекундах
});

apiAuthRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) return res.status(400).json({ message: 'Введите почту и пароль для входа' });
  const userFromDatabase = await User.findOne({ where: { email } });
  if (!userFromDatabase) return res.status(403).json({ message: 'Некорректный логин или пароль' });
  const correctPassword = await bcrypt.compare(password, userFromDatabase.password);
  if (!correctPassword) return res.status(403).json({ message: 'Некорректный логин или пароль' });
  const userWithoutPassword = userFromDatabase.get();
  delete userWithoutPassword.password;
  const { access, refresh } = generateTokens({ user: userWithoutPassword });
  return res.cookie('accessToken', access, { httpOnly: true, maxAge: 1000 * 60 * 60 })
    .cookie('refreshToken', refresh, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
    .sendStatus(200);
});

apiAuthRouter.get('/logout', (req, res) => {
  res.clearCookie('accessToken')
    .clearCookie('refreshToken')
    .sendStatus(200);
});

export default apiAuthRouter;
