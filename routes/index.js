const router = require('express').Router;
const openAPI = require('./openAPI');

router.use('/home', openAPI);


module.exports = Router;

