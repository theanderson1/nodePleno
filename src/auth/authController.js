const { login, getProfile } = require('./authService');

async function loginHandler(req, res, next) {
  try {
    const { email, password } = req.body;
    const data = login({ email, password });
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

async function profileHandler(req, res) {
  const user = getProfile(req.user.id);
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
  res.json(user);
}

module.exports = { loginHandler, profileHandler };