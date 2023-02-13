const db = require('../models/index');

const Product = db.products;

// create product
const addProduct = async (req, res) => {
  const info = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  console.log(product);
  res.status(200).send(product);
};

// get all products
const getAllProduct = async (req, res) => {
  const products = await Product.findAll();
  console.log(products);
  res.status(200).send(products);
};

// get single product
const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// delete product
const deleteProductById = async (req, res) => {
  const id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send('Product is deleted!');
};

// delete product
const updateProductById = async (req, res) => {
  const id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

const getPublished = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

module.exports = {
  addProduct,
  getAllProduct,
  getProductById,
  deleteProductById,
  updateProductById,
  getPublished,
};
