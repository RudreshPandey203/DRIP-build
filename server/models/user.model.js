import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import bcrypt from "bcrypt";

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
        ref: "product",
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

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = bcrypt.genSaltSync(16);
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

userSchema.plugin(passportLocalMongoose);

export default mongoose.model("user", userSchema);
