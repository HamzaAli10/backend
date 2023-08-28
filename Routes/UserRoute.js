const express = require('express');
const { registerUser, loginUser, allUsers } = require('../Controllers/UserController');

const router = express.Router();

 router.post('/',registerUser);
 router.post('/login',loginUser);
 router.get('/all',allUsers);


module.exports = router;
