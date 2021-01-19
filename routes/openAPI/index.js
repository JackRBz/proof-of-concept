const router = require('express').Router;

function home () {
    return 'hello home'
};

router.route('/').get(home);
    
module.exports = router;
