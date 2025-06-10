require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const testRoutes = require('./routes/testRoutes');

const app = express();

// Usa o morgan no modo 'dev' para log mais legível
app.use(morgan('dev'));

app.use(express.json());

app.use(userRoutes);
app.use(testRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
