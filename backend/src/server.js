// Inicializacion 
const express = require("express");
const morgan = require('morgan');
const cors = require('cors')
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use(require('./routes/index.routes.js'));

module.exports = app;