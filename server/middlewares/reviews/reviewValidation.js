import { body, validationResult } from "express-validator";
import BadRequestError from "../../errors/badRequestError.js";
import mongoose from "mongoose";
const reviewValidator = [
  body("review")
    .isLength({ min: 1 })
    .withMessage("Review description is required")
    .custom((value) => {
      switch (true) {
        case value.length === 1:
          throw new BadRequestError("Name must be at least 2 characters long");
        case value.length > 50:
          throw new BadRequestError(
            "Name cannot be more than 50 characters long"
          );
        default:
          return true;
      }
    })
    .trim(),
  body("productId")
    .isLength({ min: 1 })
    .withMessage("productId is required")
    .custom((value) => {
        const ObjectId=mongoose.Types.ObjectId;
        if (ObjectId.isValid(value)) {
            if ((String)(new ObjectId(value))===value) {
                return true;
            }
        }
        return false

    })
    .withMessage("Not a valid productId")
    .trim(),
];

const validatorHandler = (req, res, next) => {
  const results = validationResult(req).array({ onlyFirstError: true });
  if (Object.keys(results).length === 0) {
    return next();
  }
  const errorMessages = results.map((err) => err.msg);
  throw new BadRequestError(`${errorMessages[0]}`);
};

export { reviewValidator, validatorHandler };
