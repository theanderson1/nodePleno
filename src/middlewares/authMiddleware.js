const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const expectedToken = `Bearer ${process.env.AUTH_TOKEN}`;
  
    if (authHeader === expectedToken) {
      next();
    } else {
      res.status(401).json({ message: 'Não autorizado' });
    }
  };
  
  module.exports = authMiddleware;
  