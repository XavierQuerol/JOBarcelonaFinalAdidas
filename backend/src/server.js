// Inicializacion 
const express = require("express");
const app = express();
const morgan = require('morgan');

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use(require('./routes/index.routes.js'));

module.exports = app;