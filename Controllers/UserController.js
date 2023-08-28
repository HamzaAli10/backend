const User = require("../Models/UserModel");

const registerUser = async (req,resp) =>{
    const {name,email,password} = req.body;

    if (!name || !email ||!password){
        resp.status(400).send("Please enter all fields");
    }

    const userExist = await User.findOne({email});

    if(userExist){
        resp.status(400).send("User already exist");
    }

    const user=  await User.create({
        name,email,password
    });

    if(user){
        resp.status(200).json({
            _id : user._id,
            name: user.name,
            email:user.email,
            password:user.password
        })
    }else{
        resp.status(400).send("failed to create a new user");
    }
}

    const loginUser = async (req,resp)=>{
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(user.password===password){
            resp.status(200).json({
                _id:user.id,
                name:user.name,
                email:user.email,
                password:user.password
                
            })
        }else{
            resp.status(400).send("Invalid password or email");
        }


    }

    const allUsers = async (req,resp)=>{
        try {
            const currentUserId = req.query.userId; // Assuming you're sending the user ID of the logged-in user in the query
            const users = await User.find({ _id: { $ne: currentUserId } });
            resp.status(200).json(users);
          } catch (error) {
            console.error(error);
            resp.status(500).json({ message: 'Internal server error' });
          }
       
    }

module.exports = {registerUser,loginUser,allUsers};