const express = require("express");
const dotenv = require("dotenv");
// const { chats } = require('./data/data');
const UserRoute = require("./Routes/UserRoute");
// const MessageRoute = require('./Routes/MessageRoute');
const ConversationRoute = require("./Routes/ConversationRoute");
const MessageRoute = require("./Routes/MessageRoute");
const cors = require("cors");
// const http = require("http");
const app = express();
// const socket = require('socket.io');

// const socketIo = require("socket.io");
// dotenv.config();

app.use(express.json()); // to accept json data
app.use(cors());

// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: "*",
//   },
// });

const mongoose = require("mongoose");


const PORT = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/chatapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));
  // io.on("connection", (socket) => {
  //   console.log("A user connected:", socket.id);
  
    // Listen for private-chat event from the client
    // socket.on("private-chat", ({ userId }) => {
    //   console.log("send message", userId);
    //   const user = User.find(u => u._id === userId);
    //   if (user) {
    //     // Join a private room for the selected user
    //     socket.join(userId);
    //     console.log(`User ${socket.id} joined private room with ${user.name}`);
  
    //     // You can emit a welcome message or whatever you want here
    //     io.to(userId).emit('private-chat-welcome', { message: `Welcome to private chat with ${user.name}!` });
    //   }
    // });
  
    // // Handle private messages within a room
    // socket.on('private-message', ({ userId, message }) => {
    //   io.to(userId).emit('private-message', { message, sender: socket.id });
    // });

  //   socket.on('private-message', async ({ userId, message }) => {
  //     // const senderId =  socket.user._id; // Assuming you're using user authentication
  //     const senderId =  socket.id;  

  //     const sentMessage = new Message({
  //       sender: senderId,
  //       receiver: userId,
  //       text: message,
  //     });
    
  //     const receivedMessage = new Message({
  //       sender: userId,
  //       receiver: senderId,
  //       text: message,
  //     });
    
  //     await Promise.all([sentMessage.save(), receivedMessage.save()]);
    
  //     // Emit the saved messages back to both sender and receiver
  //     socket.emit('private-message', { message: sentMessage });
  //     io.to(userId).emit('private-message', { message: receivedMessage });
  //   });
    
  
  //   socket.on('disconnect', () => {
  //     console.log('A user disconnected:', socket.id);
  //   });
  // });
  

app.use("/api/user", UserRoute);
app.use("/api/conversation", ConversationRoute);
app.use("/api/messages", MessageRoute);

app.listen(PORT, () => {
  console.log("app is running", PORT);
});