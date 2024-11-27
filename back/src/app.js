// Creation and configuration of the Express APP
const express = require('express');
const cors = require('cors');
const dayjs = require('dayjs');
const fs = require('node:fs/promises');

// File logger
const winston = require('winston');
require('winston-daily-rotate-file');

const { combine, timestamp, json } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
    filename: './logs/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
});

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp(), json()),
    transports: [fileRotateTransport],
});

const app = express();
app.use(express.json());
app.use(cors());

// Middleware
// Mostrar por consola la fecha actual
app.use((req, res, next) => {
    logger.info(dayjs().format('DD-MM-YYYY HH:mm:ss'));
    next();
});

// Dependiendo de un número aleatorio, respondemos o continuamos
// app.use((req, res, next) => {
//     const random = Math.random();
//     console.log(random);
//     if (random > 0.5) {
//         res.send('El número es mayor de 0.5');
//     } else {
//         next();
//     }
// });

// Middleware para escribir en un fichero la información de la petición
// [22-10-2024 12:40:54] URL: /api/clientes. METHOD: GET
app.use((req, res, next) => {
    const currentDate = dayjs().format('DD-MM-YYYY HH:mm:ss');
    const content = `[${currentDate}] URL: ${req.url}. METHOD: ${req.method}\n`;
    fs.appendFile('./main.log', content);
    next()
});

// Route configuration
app.use('/api', require('./routes/api.routes'));

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    logger.error(err);
    res.status(500).json(err);
});

module.exports = app;