const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    conversationId:{
        type:String,
    },
    sender:{
        type:String,
    },
    text:{
        type:String,
    },
  },
  { timestamps: true }
);

module.exports  = mongoose.model("Message", MessageSchema);

// const mongoose = require('mongoose');

// const messageSchema = new mongoose.Schema({
//   sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   text: String,
//   createdAt: { type: Date, default: Date.now },
// });

// const Message = mongoose.model('Message', messageSchema);

// module.exports = Message;
