import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    location: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["general", "admin"],
      default: "general",
    },

    /*   cartItems: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
        default: [],
      },
    ], */

    isEmailVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("users", userSchema);
