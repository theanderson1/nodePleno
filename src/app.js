const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./auth/authRoutes');
const requestLogger = require('./middlewares/requestLogger');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(requestLogger);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use(errorHandler);

module.exports = app;
