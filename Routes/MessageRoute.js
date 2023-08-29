const express = require('express');
const {AddMessage,GetMessages} = require('../Controllers/MessageController');

const router = express.Router();

router.post('/',AddMessage);
router.get('/:conversationId',GetMessages);
module.exports = router;
