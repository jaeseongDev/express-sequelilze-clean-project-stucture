const express = require('express');
const {Post} = require("../models");
const router = express.Router();

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const savedPost = await Post.create({
    title,
    content,
  })
  res.status(201).send(savedPost);
})

module.exports = router;
