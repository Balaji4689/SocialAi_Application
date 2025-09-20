
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")


dotenv.config()
const secretKey = process.env.JWT_SECRET;


const userRegister = async(req, res) =>{
    const {userName , email, password}= req.body;
    try {
        console.log("received data " , req.body)

        if (!userName || !email || !password){
            return res.status(400).json({error:"all fields are required"})
        }

        const existingCustomer = await User.findOne({email});
        if (existingCustomer){
            return res.status(400).json({error:"email already exists"});
        }

        const hashedPassword= await bcrypt.hash(password , 10);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({message:"user Register successfuly!"});
        console.log("user Register successfuly!")

    } catch (error) {
        console.error("error during user registering ", error );
        res.status(500).json({error:"internal server error"})
    }
}



const userLogin = async(req , res)=>{
    const {  email, password}= req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
          return res.status(401).json({ error: "Invalid email or password" });
        }
        const token = jwt.sign({id: user._id } , secretKey , {expiresIn:"1h"});
        res.status(200).json({
            success:"login Successfully",
            token,
            user:{
                id:user._id,
                userName:user.userName,
                email:user.email
            }
        });
        console.log("totan:" ,token);
    } catch (error) {
        console.error("error during login", error );
        res.status(500).json({message:"internal server error"})
    }

}


module.exports={userRegister , userLogin};

