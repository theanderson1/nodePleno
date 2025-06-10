Semana 2

Criar rotas REST com Express (/users)
Separar camadas (routes, controllers, services)
Criar middleware global de erro
Adicionar um middleware de log próprio

O projeto está estruturado de forma modular e organizada, com base nas melhores práticas para aplicações Node.js usando Express.

1. GET /users — Listar todos os usuários
curl --location 'http://localhost:3000/users'

2. GET /users/:id — Buscar um usuário por ID
curl --location 'http://localhost:3000/users/2'

3. POST /users — Criar novo usuário
curl --location 'http://localhost:3000/users' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Jorge"
}'

4. DELETE /users/:id — Remover usuário por ID
curl --location --request DELETE 'http://localhost:3000/users/2'


Os usuários foram simulados de forma simples no arquivo userService.js, usando uma lista em memória (array de objetos). Isso permite testar as rotas sem precisar de banco de dados.