import { StatusCodes } from "http-status-codes";
import Review from "../models/review.model.js";
import { NotFoundError } from "../errors/index.js";
import checkuserPermission from "../utils/checkuserPermission.js";
import { encrytion } from "../utils/encryption.js";
import { decryption } from "../utils/decryption.js";

const getAllReviews = async (req, res) => {
  const reviews = await Review.find({});
  reviews.forEach((review) => (review.review = decryption(review.review)));
  res.status(StatusCodes.OK).json({ reviews, totalReviews: reviews.length });
};
const getSingleProductReviews = async (req, res) => {
  const { productId } = req.params;
  const reviews = await Review.find({ productId });
  reviews.forEach((review) => (review.review = decryption(review.review)));
  res.status(StatusCodes.OK).json({ reviews, totalReviews: reviews.length });
};
const getSingleReview = async (req, res) => {
  const { reviewId } = req.params;
  const singleReview = await Review.findOne({ _id: reviewId });
  if (!singleReview) {
    throw new NotFoundError(`No review with Id:${reviewId}`);
  }
  const { review } = singleReview;
  singleReview.reviewt = decryption(review);
  res.status(StatusCodes.OK).json({ singleReview });
};
const createReview = async (req, res) => {
  const { review, productId } = req.body;

  const encryptedData = encrytion(review);

  const newReview = await Review.create({
    review: encryptedData,
    userId: req.user._id,
    productId,
  });
  res.status(StatusCodes.CREATED).json({ msg: "Review added successfully" });
};
const deleteReview = async (req, res) => {
  const { reviewId } = req.params;
  const review = await Review.findOne({ _id: reviewId });
  if (!review) {
    throw new NotFoundError(`No review with Id:${productId}`);
  }
  checkuserPermission(req.user, review.userId);
  await Review.deleteOne({ _id: reviewId });
  res.status(StatusCodes.OK).json({ msg: "review deleted successfully" });
};
const updateReview = async (req, res) => {
  const { review } = req.body;
  const { reviewId } = req.params;
  const reviewExists = await Review.findOne({ _id: reviewId });
  if (!reviewExists) {
    throw new NotFoundError(`No comment with Id:${reviewId}`);
  }
  checkuserPermission(req.user, reviewExists.userId);
  reviewExists.review = encrytion(review);
  await reviewExists.save();
  res.status(StatusCodes.OK).json({ msg: "review upadated successfully" });
};

export {
  getAllReviews,
  getSingleProductReviews,
  getSingleReview,
  createReview,
  deleteReview,
  updateReview,
};
