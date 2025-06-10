const express = require('express');
const app = express();

// Middleware para parsear JSON no corpo da requisição
app.use(express.json());

// Middleware para parsear dados de formulários (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Rota simples de teste
app.post('/sinc', (req, res) => {
  console.log('1 - Início');

setTimeout(() => {
  console.log('2 - setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3 - Promise');
});

console.log('4 - Fim');
  res.send('Fim');
});

app.post('/timeout', (req, res) => {
  function tarefaDemorada() {
    setTimeout(() => {
      console.log('1 - Tarefa feita depois de 2 segundos');
    }, 2000);
  }
  
  console.log('2 - Iniciando tarefa');
  tarefaDemorada();
  console.log('3 - Continuando execução...');
  res.send('Fim');
});

app.post('/bloc', (req, res) => {
  function bloquearThread() {
    const fim = Date.now() + 3000;
    while (Date.now() < fim) {} // bloqueia a thread principal
    console.log('1 - Bloqueio finalizado');
  }
  
  setTimeout(() => {
    console.log('2 - Timeout executado');
  }, 0);
  
  bloquearThread();
  console.log('3 - Após bloqueio');
  res.send('Fim');
});

// Definindo a porta
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
