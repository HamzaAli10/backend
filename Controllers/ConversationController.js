const Conversation = require("../Models/Conversation");

const conversation = async (req,resp)=>{
  const newConversation = new Conversation ({
      members:[req.body.senderId,req.body.receiverId]
  });
  
  try {
      const savedConversation = await newConversation.save();
      resp.status(200).json(savedConversation);
  } catch (error) {
      resp.status(500).json(error);
  }
};

// get single user conversation
const SingleConversation = async (req,res)=>{
  console.log(req.params.userId);
  try {
    const conversation = await Conversation.find({
      members:{$in:[req.params.userId]}
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {conversation,SingleConversation};
