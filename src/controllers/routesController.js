const router = require('express').Router();

const mainRoute = require('../routes/api.js');

router.use('/', mainRoute);

module.exports = router;