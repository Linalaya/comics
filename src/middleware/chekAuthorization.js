const chekAuthorization = (req, res, next) => {
  if (res.locals.user) res.redirect('/');
  next();
};

export default chekAuthorization;
