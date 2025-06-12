const request = require('supertest');
const app = require('../src/app');

describe('Rotas /users', () => {
  let newUserId;

  it('GET /api/users → deve retornar status 200 e um array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/users → deve adicionar usuário e retornar 201', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Teste Usuário' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    newUserId = res.body.id;
  });

  it('GET /api/users/:id → deve retornar o usuário correto', async () => {
    const res = await request(app).get(`/api/users/${newUserId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', newUserId);
  });

  it('GET /api/users/:id → deve retornar 404 se não existir', async () => {
    const res = await request(app).get('/api/users/999999');
    expect(res.statusCode).toBe(404);
  });

  it('GET /api/users/:id → com ID inexistente deve retornar 404', async () => {
    const res = await request(app).get('/api/users/9999'); // ID que não existe
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error', 'Usuário não encontrado');
  });

  it('DELETE /api/users/:id → deve remover o usuário e retornar 200', async () => {
    const res = await request(app).delete(`/api/users/${newUserId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Usuário removido com sucesso' });
  });
});
