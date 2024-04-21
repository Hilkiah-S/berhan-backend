import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Login
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// Register a new user

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  console.log(name, email, password);


  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  const user = await User.create({
    name,
    email, 
    password,
  })

  if (user){
    generateToken(res, user._id);

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data.')
  }
});

// Get user by Id

export { registerUser, authUser }
