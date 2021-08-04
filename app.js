const express = require('express');
const app = express();
const cors = require('cors')

const taskRoute = require('./api/task/task.route')

app.use(express.json());
app.use(cors())
app.use('/task', taskRoute);

module.exports = app;