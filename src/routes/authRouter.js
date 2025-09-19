import express from 'express';

const authRouter = express.Router();

authRouter.get('/register', async (req, res) => {
  res.render('RegisterPage');
});

authRouter.get('/login', async (req, res) => {
  res.render('LoginPage');
});

export default authRouter;
