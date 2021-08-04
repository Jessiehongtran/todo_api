const express = require('express');
const app = express();

const taskRoute = require('./api/task/task.route')

app.use(express.json());
app.use('/task', taskRoute);

module.exports = app;