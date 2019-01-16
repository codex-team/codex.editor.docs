const express = require('express');
const router = express.Router();

const home = require('./home');
const pages = require('./pages');
const auth = require('./auth');
const api = require('./api');

const pagesMiddleware = require('./middlewares/pages');

router.use('/', pagesMiddleware, home);
router.use('/', pagesMiddleware, pages);
router.use('/', pagesMiddleware, auth);
router.use('/api', api);

module.exports = router;
