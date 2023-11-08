import { body, validationResult } from "express-validator";
import User from "../../models/user.model.js";
import BadRequestError from "../../errors/badRequestError.js";

const registerValidator = [
  body("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .custom((value, { req }) => {
      switch (true) {
        case value.length === 1:
          throw new BadRequestError("Name must be at least 2 characters long");
        case value.length > 20:
          throw new BadRequestError(
            "Name cannot be more than 20 characters long"
          );
        default:
          return true;
      }
    })
    .trim(),
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new BadRequestError(
          "There is already an account associated with this email address"
        );
      }
    }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Please enter a password with 6 or more characters"),
  body("role").default("general"),
];

const validatorHandler = (req, res, next) => {
  const results = validationResult(req).array({ onlyFirstError: true });
  if (Object.keys(results).length === 0) {
    return next();
  }
  const errorMessages = results.map((err) => err.msg);
  throw new BadRequestError(`${errorMessages[0]}`);
};

export { registerValidator, validatorHandler };
