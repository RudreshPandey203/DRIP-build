import { param, validationResult } from "express-validator";
import mongoose from "mongoose";
import { BadRequestError } from "../../errors/index.js";
const reviewIdParamValidator = [
  param("reviewId")
    .isLength({ min: 1 })
    .withMessage("ReviewId is required")
    .custom((value) => {
      const ObjectId = mongoose.Types.ObjectId;
      if (ObjectId.isValid(value)) {
        if (String(new ObjectId(value)) === value) {
          return true;
        }
      }
      return false;
    })
    .withMessage("Invalid Review Id")
    .trim(),
];

const reviewIdParamvalidatorHandler = (req, res, next) => {
  const results = validationResult(req).array({ onlyFirstError: true });
  if (Object.keys(results).length === 0) {
    return next();
  }
  const errorMessages = results.map((err) => err.msg);
  throw new BadRequestError(`${errorMessages[0]}`);
};

export { reviewIdParamValidator, reviewIdParamvalidatorHandler };
