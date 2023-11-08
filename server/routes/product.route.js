import express from "express";
import authentication from "../middlewares/authentication.js";
import uploadPicture from "../middlewares/products/fileUpload.js";
import authorization from "../middlewares/authorization.js";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getSingleProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post(authentication, authorization, createProduct);

router.route("/img-upload").post(authentication, authorization, uploadPicture);
router
  .route("/:productId")
  .get(getSingleProduct)
  .patch(authentication, authorization, editProduct)
  .delete(authentication, authorization, deleteProduct);

export default router;
