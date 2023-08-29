const express = require('express');
const dotenv = require('dotenv');
// const { chats } = require('./data/data');
const UserRoute = require('./Routes/UserRoute');
// const MessageRoute = require('./Routes/MessageRoute');
const ConversationRoute = require('./Routes/ConversationRoute');
const MessageRoute = require('./Routes/MessageRoute');
const cors = require('cors');
const app = express();
dotenv.config();

const mongoose = require('mongoose');

app.use(express.json()); // to accept json data
app.use(cors());
const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/chatapp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

  app.use('/api/user',UserRoute);
  app.use('/api/conversation',ConversationRoute);
  app.use('/api/messages',MessageRoute);


app.listen(PORT,()=>{
    console.log("app is running");
});