import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user =await User.create({
    name,
    email,
    password,
  });
  return next();
};

const login = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "login Successfull" });
};

export { register, login };
