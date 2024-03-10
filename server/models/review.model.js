import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      min: 3,
      max: 500,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "users",
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "product",
    },
  },
  { timestamps: true }
);
reviewSchema.index({ userId: 1, productId: 1 }, { unique: true });

export default mongoose.model("review", reviewSchema);
