Semana 3

implementar um sistema de login com autenticação via JWT, protegendo rotas e simulando um fluxo básico de autenticação e autorização.

Como gerar o token:
curl --location 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@example.com",
    "password": "123456"
}'

Como usar o token na rota protegida:
curl --location 'http://localhost:3000/auth/profile' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsImlhdCI6MTc0OTczMzEyNCwiZXhwIjoxNzQ5NzM2NzI0fQ.bNDuuQFUWCh28eLPEIsys1YOYUmiqSjVsiuhA4AiIFQ'

Qual é o usuário/senha simulados
email: 'admin@example.com',
password: '123456'