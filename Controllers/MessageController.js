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



module.exports = {AddMessage};
