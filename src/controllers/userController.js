const users = [
  { id: 1, name: 'Anderson' },
  { id: 2, name: 'Maria' },
  { id: 3, name: 'João' },
];

// Simula delay de 2 segundos com Promise + setTimeout
const getUsers = async (req, res) => {
  try {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 2000); // 2 segundos de atraso
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários' });
  }
};

module.exports = { getUsers };
