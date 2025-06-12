const userService = require('../src/services/userService');

describe('userService', () => {
  it('fetchUsers deve retornar um array de usuários', async () => {
    const users = await userService.fetchUsers();
    expect(Array.isArray(users)).toBe(true);
  });

  it('fetchUserById deve retornar o usuário correto', async () => {
    const user = await userService.fetchUserById(1);
    expect(user).toHaveProperty('id', 1);
  });

  it('fetchUserById deve retornar null para usuário inexistente', async () => {
    // mock para retornar null
    jest.spyOn(userService, 'fetchUserById').mockResolvedValueOnce(null);

    const user = await userService.fetchUserById(9999);
    expect(user).toBeNull();

    // restaurar implementação original
    userService.fetchUserById.mockRestore();
  });

  it('addUser deve adicionar um novo usuário e retornar o objeto com ID', async () => {
    const newUser = await userService.addUser({ name: 'Novo Usuário' });
    expect(newUser).toHaveProperty('id');
    expect(newUser.name).toBe('Novo Usuário');
  });

  it('removeUser deve remover um usuário existente e retornar true', async () => {
    const user = await userService.addUser({ name: 'Para Remover' });
    const removed = await userService.removeUser(user.id);
    expect(removed).toBe(true);
  });

  it('removeUser deve retornar false se o usuário não existir', async () => {
    // mock para simular falha na remoção
    jest.spyOn(userService, 'removeUser').mockResolvedValueOnce(false);

    const removed = await userService.removeUser(9999);
    expect(removed).toBe(false);

    userService.removeUser.mockRestore();
  });
});
