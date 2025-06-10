let users = [
  { id: 1, name: 'Anderson' },
  { id: 2, name: 'Maria' },
  { id: 3, name: 'João' },
];

const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 500);
  });
};

const fetchUserById = async (id) => {
  return users.find(user => user.id === id);
};

const addUser = async (userData) => {
  const newUser = {
    id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
    ...userData
  };
  users.push(newUser);
  return newUser;
};

const removeUser = async (id) => {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};

module.exports = {
  fetchUsers,
  fetchUserById,
  addUser,
  removeUser
};
