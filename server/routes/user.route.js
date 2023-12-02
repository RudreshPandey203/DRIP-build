import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import {
  registerValidator,
  validatorHandler,
} from "../middlewares/users/usersValidation.js";
import { sendVerificationEmail } from "../middlewares/users/verificationEmail.js";
import passport from "../config/passport.js";

const router = express.Router();

router
  .route("/register")
  .post(registerValidator, validatorHandler, register, sendVerificationEmail);
router
  .route("/login")
  .post(passport.authenticate("local"),  login);

export default router;
