const express = require('express');
const {AddMessage} = require('../Controllers/MessageController');

const router = express.Router();

router.post('/',AddMessage);

module.exports = router;
