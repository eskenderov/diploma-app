const db = require('../models/index');
const crypto = require('crypto');
const Comment = db.comments;

const getAllComment = async (req, res) => {
  console.log(req.body);
  const products = await Comment.findAll();
  res.status(200).send(products);
};

const addComment = async (req, res) => {
  // if (/[^a-zA-Z0-9а-яА-ЯёЁ]/g.test(author)) {
  //   return res.status(400).send('Имя автора не может содержать знаки!');
  // }
  // if (/[<>'"&]/g.test(text)) {
  //   return res
  //     .status(400)
  //     .send(`Текст комментария не может содержать знаки: <, >, ', ", &.`);
  // }
  try {
    const product = await Comment.create({
      id: crypto.randomUUID(),
      author: req.body.author,
      text: req.body.text,
      createdAt: null,
      updatedAt: null,
    });
    res.status(201).send(product);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllComment,
  addComment,
};
