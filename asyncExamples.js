// Função usando Promise + setTimeout
function fetchDataWithPromise() {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Dados com Promise'), 1000);
    });
  }
  
  // Função async/await simples
  async function fetchDataWithAsync() {
    return 'Dados com async/await';
  }

  async function fetchDataWithError() {
    try {
      throw new Error("Erro simulado");
    } catch (err) {
      console.error("Erro capturado:", err.message);
    }
  }
  
  
  // Função principal para testar ambas
  async function runTests() {
    console.log('Iniciando testes...\n');
  
    // Teste com Promise
    fetchDataWithPromise().then((result) => {
      console.log('Resultado da Promise:', result);
    });
  
    // Teste com async/await
    const asyncResult = await fetchDataWithAsync();
    console.log('Resultado do async/await:', asyncResult);

    fetchDataWithError()
  }
  
  // Executa os testes
  runTests();
  