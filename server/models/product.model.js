import mongoose from "mongoose";

const sizePriceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["REGULAR", "OVERSIZED"],
  },
  size: {
    type: String,
    required: true,
    enum: ["S", "M", "L", "XL", "XXL"],
  },
  price: {
    type: Number,
    required: true,
  },
});

const imageUrlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["FRONT", "BACK", "FRONTWITHPERSON", "BACKWITHPERSON"],
  },
  url: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      min: [2, "Atleast 2 characters is required"],
      max: [30, "Cannot be more than 50 characters"],
    },
    description: {
      type: String,
      trim: true,
      required: true,
      min: [2, "Atleast 2 characters is required"],
      max: [30, "Cannot be more than 50 characters"],
    },
    sizePrices: [sizePriceSchema],
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    colors: [String],
    imageURLs: [imageUrlSchema],
  },
  { timestamps: true }
);

productSchema.pre("deleteOne", async function () {
  const id = this.getQuery()["_id"];
  await mongoose.model("review").deleteMany({ productId: id });
});

export default mongoose.model("product", productSchema);
