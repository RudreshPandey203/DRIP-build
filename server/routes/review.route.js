import express from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getSingleProductReviews,
  getSingleReview,
  updateReview,
} from "../controllers/review.controller.js";
import authentication from "../middlewares/authentication.js";
import {
  reviewValidator,
  validatorHandler,
} from "../middlewares/reviews/reviewValidation.js";
import {
  reviewIdParamValidator,
  reviewIdParamvalidatorHandler,
} from "../middlewares/reviews/reviewIdValidation.js";

import {
  productIdParamValidator,
  productIdParamvalidatorHandler,
} from "../middlewares/products/productIdValidation.js";

const router = express.Router();

router
  .route("/")
  .get(getAllReviews)
  .post(authentication, reviewValidator, validatorHandler, createReview);
router
  .route("/product/:productId")
  .get(
    productIdParamValidator,
    productIdParamvalidatorHandler,
    getSingleProductReviews
  );

router.use(authentication);
router
  .route("/:reviewId")
  .get(reviewIdParamValidator, reviewIdParamvalidatorHandler, getSingleReview)
  .delete(reviewIdParamValidator, reviewIdParamvalidatorHandler, deleteReview)
  .patch(reviewIdParamValidator, reviewIdParamvalidatorHandler, updateReview);

export default router;
