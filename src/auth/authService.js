const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'segredo-supersecreto';

// Simula usuário "cadastrado"
const fakeUser = {
  id: 1,
  email: 'admin@example.com',
  password: '123456',
  name: 'Admin'
};

function login({ email, password }) {
  if (email === fakeUser.email && password === fakeUser.password) {
    const token = jwt.sign({ id: fakeUser.id, email: fakeUser.email }, SECRET, {
      expiresIn: '1h'
    });
    return { token };
  }
  throw new Error('Credenciais inválidas');
}

function getProfile(userId) {
  if (userId === fakeUser.id) {
    const { password, ...userData } = fakeUser;
    return userData;
  }
  return null;
}

module.exports = { login, getProfile };