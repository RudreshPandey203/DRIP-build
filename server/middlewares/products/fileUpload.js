import cloudinary from "cloudinary";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../../errors/index.js";
import * as fs from "fs"
const uploadPicture = async (req, res, next) => {
  console.log(req.files);
  if (
    !req.files ||
    !req.headers["content-type"].startsWith("multipart/form-data")
  ) {
    throw new BadRequestError("Please upload a valid image");
  }

  const productImage = req.files?.image;
  if (!productImage && !productImage?.mimetype?.startsWith("image")) {
    throw new BadRequestError("Please upload a  image");
  }
  if (productImage) {
    const result = await cloudinary.v2.uploader.upload(
      req.files?.image?.tempFilePath,
      {
        use_filename: true,
        folder: "DRIP_BUILD",
      }
    );
    fs.unlinkSync(req.files?.image?.tempFilePath);
    res.status(StatusCodes.CREATED).json({ imageUrl: result.secure_url });
  }
};

export default uploadPicture;
