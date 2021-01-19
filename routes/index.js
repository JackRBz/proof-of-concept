const router = require('express').Router;
const openAPI = require('./openAPI');

router.use('/api', openAPI);


module.exports = Router;

