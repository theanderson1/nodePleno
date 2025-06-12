const request = require('supertest');
const app = require('../src/app');

describe('Rotas /auth', () => {
  let token;

  it('POST /api/auth/login → deve retornar 200 e um token com credenciais corretas', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@example.com',
        password: '123456'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    token = res.body.token;
  });

it('POST /api/auth/login → deve retornar 200 e um token com credenciais corretas', async () => {
  const res = await request(app)
    .post('/api/auth/login')
    .send({
      email: 'admin@example.com',
      password: '123456',
    });

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('token');

  const token = res.body.token;
  expect(typeof token).toBe('string');
  expect(token).toMatch(/^ey/); // Verifica se o token tem formato JWT (base64)
});

  it('GET /api/protected → sem token deve retornar 401', async () => {
    const res = await request(app).get('/api/protected');
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error', 'Token ausente');
  });

  it('GET /api/protected → com token válido deve retornar 200 e mensagem', async () => {
    const res = await request(app)
      .get('/api/protected')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Acesso autorizado!');
  });
});
