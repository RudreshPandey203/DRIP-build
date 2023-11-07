import express from "express";
import authentication from "../middlewares/authentication.js";
import uploadPicture from "../middlewares/products/fileUpload.js";
const router = express.Router();

router.route("/img-upload").post(authentication,uploadPicture);

export default router;
