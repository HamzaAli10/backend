const express = require('express');
// const Conversation = require('../Models/Conversation');
const { conversation,SingleConversation } = require('../Controllers/ConversationController');
const router = express.Router();

router.post('/',conversation); 
router.get('/:userId',SingleConversation)
module.exports = router;