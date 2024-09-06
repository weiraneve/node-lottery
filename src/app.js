const express = require('express');
const heroRoutes = require('./routes/hero');

const app = express();

app.use(express.json());

app.use('/', heroRoutes);

module.exports = app;