const authService = require('../src/auth/authService');
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');

describe('authService', () => {
  const correctCredentials = {
    email: 'admin@example.com',
    password: '123456'
  };

  it('login com credenciais válidas deve retornar token', () => {
    jwt.sign.mockReturnValue('fake-token');

    const result = authService.login(correctCredentials);

    expect(jwt.sign).toHaveBeenCalledWith(
      { email: correctCredentials.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    expect(result).toEqual({ token: 'fake-token' });
  });

  it('login com credenciais inválidas deve lançar erro', () => {
    expect(() => {
      authService.login({ email: 'x@x.com', password: 'errado' });
    }).toThrow('Credenciais inválidas');
  });
});
