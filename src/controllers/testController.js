// Simula uma operação async que pode falhar
const asyncOperation = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = Math.random() < 0.5; // 50% chance de falhar
        if (shouldFail) {
          reject(new Error('Erro simulado na operação assíncrona'));
        } else {
          resolve('Operação assíncrona concluída com sucesso');
        }
      }, 1500);
    });
  };
  
  const testAsync = async (req, res) => {
    try {
      const result = await asyncOperation();
      res.json({ success: true, message: result });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  module.exports = { testAsync };
  