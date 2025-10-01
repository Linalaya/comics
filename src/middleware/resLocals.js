import jwt from 'jsonwebtoken';
import 'dotenv/config';

const resLocals = (req, res, next) => {
  try {
    const { refreshToken } = req.cookies;
    if (refreshToken) {
      const { user } = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      res.locals.user = user; // если user есть - получаем доступ к нему через initState
    }
  } catch (error) {
    console.log(error);
  } finally {
    next();
  }
};

export default resLocals;
