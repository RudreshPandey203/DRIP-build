import { StatusCodes } from "http-status-codes";
import Product from "../models/product.model.js";
import { NotFoundError } from "../errors/index.js";

//GET ALL T-SHIRTS
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).send({ products, totalProducts: products.length });
};
//GET SINGLE T-SHIRT
const getSingleProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.find({ _id: productId });
  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
  res.status(StatusCodes.OK).json({ product });
};
// CREATE A SINGLE T-SHIRT
const createProduct = async (req, res) => {
  const { name, description, colors, sizePrices, imageURLs } = req.body;
  const availableSizes = sizePrices.map((shirt) => shirt.size);
  const product = await Product.create({
    name,
    description,
    colors,
    sizePrices,
    imageURLs,
    availableSizes,
  });

  res.status(StatusCodes.OK).json({ product });
};
// EDIT/PATCH A SINGLE T-SHIRT
const editProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, description, colors, sizePrices, imageURLs } = req.body;
  const availableSizes = sizePrices.map((shirt) => shirt.size);

  const product = await Product.findOne({ _id: productId });
  product.name = name;
  product.description = description;
  product.colors = colors;
  product.sizePrices = sizePrices;
  product.imageURLs = imageURLs;
  product.availableSizes = availableSizes;

  await product.save();

  res.status(StatusCodes.OK).json({ product });
};
//DELETE A T-SHIRT
const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new NotFoundError(`No product with id ${productId}`);
  }
  await Product.deleteOne({ _id: productId });
  res.status(StatusCodes.OK).json({ msg: "Delete the product successfully" });
};

export {
  getAllProducts,
  getSingleProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
