import express from "express";
import User from "../model/User";

const userRouter = express.Router();

userRouter.post("/registration", async (req, res, next) => {
  const { firstname, lastname, email, username, password, confirmpassword } =
    req.body;
  let user;
  try {
    user = new User({
      firstname,
      lastname,
      email,
      username,
      password,
      confirmpassword,
    });

    user = await user.save();
  } catch (err) {
    console.log(err);
  }

  if (!user) {
    return res.status(500).json("Invalid request");
  }

  return res.status(200).json({ user });
});

userRouter.post("/login", async (req, res, next) => {
  const { email, username, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({email});
  } catch (err) {
    console.log(err);
  }

  if (
    email ||
    ((username === existingUser.email || existingUser.username) &&
      password === existingUser.password)
  ){
    return res.status(200).json("logged in successfully");
  }

  return res.status(500).json("invalid request")
    
});

export default userRouter;
