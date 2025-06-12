require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const requestLogger = require('./middlewares/requestLogger');
const errorHandler = require('./middlewares/errorHandler');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./auth/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(requestLogger);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/', protectedRoutes);
app.use(errorHandler);

module.exports = app;
