// import modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routesController = require('./controllers/routesController.js');
const databaseController = require('./controllers/databaseController.js');
const logger = require('./logger.js');
global.logger = logger;

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());

databaseController.connectServer(MONGO_URL);

app.use('/api', routesController);

app.listen(PORT, () => {
    logger.successLog(`API listening on port ${PORT}`);
});