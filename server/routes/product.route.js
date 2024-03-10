import express from "express";
import authentication from "../middlewares/authentication.js";
import uploadPicture from "../middlewares/products/fileUpload.js";
import authorization from "../middlewares/authorization.js";
import {
  productValidator,
  validatorHandler,
} from "../middlewares/products/productValidation.js";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getSingleProduct,
} from "../controllers/product.controller.js";
import {
  productIdParamValidator,
  productIdParamvalidatorHandler,
} from "../middlewares/products/productIdValidation.js";
const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post(
    authentication,
    authorization,
    productValidator,
    validatorHandler,
    createProduct
  );

router.route("/img-upload").post(authentication, authorization, uploadPicture);

router
  .route("/:productId")
  .get(
    productIdParamValidator,
    productIdParamvalidatorHandler,
    getSingleProduct
  )
  .patch(
    authentication,
    authorization,
    productIdParamValidator,
    productIdParamvalidatorHandler,
    editProduct
  )
  .delete(
    authentication,
    authorization,
    productIdParamValidator,
    productIdParamvalidatorHandler,
    deleteProduct
  );

export default router;
