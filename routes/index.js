const router = require('express').Router();
const openApi = require('./openAPI');
const secureApi = require('./secureApi');
const {verifyToken} = require('./utils/verifyToken');

router.use('/api', openApi);

router.use('/api',verifyToken, secureApi);

module.exports = router;

