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

const router = express.Router();

router
  .route("/")
  .get(getAllReviews)
  .post(authentication, reviewValidator, validatorHandler, createReview);
router.route("/product/:productId").get(getSingleProductReviews);
router
  .route("/:reviewId")
  .get(authentication, getSingleReview)
  .delete(authentication, deleteReview)
  .patch(authentication, updateReview);

export default router;
