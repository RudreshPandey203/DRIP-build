import { StatusCodes } from "http-status-codes";
import Product from "../models/product.model.js";
import { NotFoundError } from "../errors/index.js";

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).send({ products, totalProducts: products.length });
};
const getSingleProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.find({ _id: productId });
  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
  res.status(StatusCodes.OK).send({ product });
};
const createProduct = async (req, res) => {
  const { name, description, colors, sizePrices, imageURLs } = req.body;
  res.status(StatusCodes.OK).send("create products");
};
const editProduct = async (req, res) => {
  res.status(StatusCodes.OK).send("edit products");
};
const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
  await Post.deleteOne({ _id: productId });
  res.status(StatusCodes.OK).send("delete products");
};

export {
  getAllProducts,
  getSingleProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
