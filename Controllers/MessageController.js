const Message = require("../Models/MessageModel");

const AddMessage = async (req,resp)=>{
  const newMessage = new Message (req.body);
  
  try {
      const savedMessage = await newMessage.save();
      resp.status(200).json(savedMessage);
  } catch (error) {
      resp.status(500).json(error);
  }
};


const GetMessages = async(req,resp)=>{
  try {
    const messages = await Message.find({
      conversationId:req.params.conversationId,
    });
    resp.status(200).json(messages);
  } catch (error) {
    resp.status(500).json(error);
  }
}



module.exports = {AddMessage,GetMessages};
