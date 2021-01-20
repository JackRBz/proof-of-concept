const router = require('express').Router();
const openApi = require('./openAPI');
const secureApi = require('./secureApi');

router.use('/api', openApi);

router.use('/api', secureApi);

module.exports = router;

