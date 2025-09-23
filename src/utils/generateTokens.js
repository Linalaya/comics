import jwt from 'jsonwebtoken';
import 'dotenv/config';

const generateTokens = (payload) => ({
  access: jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: 3600 }), // один час
  refresh: jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '1d' }), // один день (сутки)
});
// время в expiresIn передаётся либо в секундах, либо строкой "1s", "10m", "1h", "7d"
// payload(полезная нагрузка) принимает юзера в формате объекта { user: userWithoutPassword }
export default generateTokens;
