import { body, validationResult } from "express-validator";
import User from "../../models/user.model.js";
import BadRequestError from "../../errors/badRequestError.js";
import axios from "axios";
const productValidator = [
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
  body("description")
    .isLength({ min: 1 })
    .withMessage("description is required")
    .custom((value, { req }) => {
      switch (true) {
        case value.length === 1:
          throw new BadRequestError("Name must be at least 2 characters long");
        case value.length > 30:
          throw new BadRequestError(
            "Name cannot be more than 20 characters long"
          );
        default:
          return true;
      }
    })
    .trim(),
  body("sizePrices")
    .isArray()
    .withMessage("SizePrices must be a array")
    .custom((value) => {
      const allowedSizes = ["S", "M", "L", "XL", "XXL"];
      const isValidSizesAndPrices = value.map(
        (sizes) =>
          allowedSizes.includes(sizes.size) && Number.isInteger(sizes.price)
      );
      if (isValidSizesAndPrices.includes(false)) {
        throw new BadRequestError("Please provide a valid size");
      }
      return true;
    }),
  body("colors").isArray().withMessage("Colors must be array"),
  body("imageURLs")
    .isArray()
    .withMessage("imageURLs Must be array")
  /*   .custom(async (value, { req }) => {
      await value.reduce(async (acc, id) => {
        await acc;
        console.log(id);
        const resp = await axios.get(id.url);
        console.log(resp);
        if (resp || !resp.headers["Content-Type"].startsWith("image")) {
          throw new BadRequestError("Url doesnot point to an image");
        }
      }, Promise.resolve());
    })
    .withMessage("Not a valid URL"), */
];

const validatorHandler = (req, res, next) => {
  const results = validationResult(req).array({ onlyFirstError: true });
  if (Object.keys(results).length === 0) {
    return next();
  }
  const errorMessages = results.map((err) => err.msg);
  throw new BadRequestError(`${errorMessages[0]}`);
};

export { productValidator, validatorHandler };
