console.log('1 - Inicio');

setTimeout(() => {
  console.log('2 - Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('3 - Promise');
});

console.log('4 - Fim');
