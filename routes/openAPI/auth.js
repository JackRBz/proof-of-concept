const router = require('express').Router();
const {login, logout, register, token} = require('../../controllers/authController');

router.route('/login').post(login);

router.route('/logout').post(logout);

router.route('/register').post(register);

router.route('/me').get(token);

module.exports = router;