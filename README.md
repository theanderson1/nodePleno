Semana 1

-Criar os arquivos:
  eventLoop.js
  asyncExamples.js
  Rota /async-test em testRoutes.js (ou similar)

-Adicionar explicações no README.md ou em arquivos .md separados (ex: semana1.md)

Explicação eventLoop.js:

console.log é síncrono → executa direto.
Promise entra na microtask queue (executa antes das tasks).
setTimeout vai para a task queue (executa depois das microtasks).

Explicação asyncExamples.js

O await facilita a leitura e a escrita de código assíncrono porque ele “pausa” a execução dentro de uma função async até a Promise ser resolvida, permitindo que o código pareça síncrono mesmo sendo assíncrono.

