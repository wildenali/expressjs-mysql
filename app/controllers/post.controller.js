const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op; // option

// Create
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content Kosong"
    });
    return;
  }

  // Create post jika ada data
  const post = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }

  Post.create(post)
    .then((data) => {
      res.send(data)
    }).catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error terjadi selama creating the Post"
      });
    });
}

// Retrueve all
exports.findAll = (req, res) => {

}

// Find a single
exports.findOne = (req, res) => {

}

// Update a Post with ID
exports.update = (req, res) => {

}

// Delete a Post
exports.delete = (req, res) => {

}

// Delete All Posts
exports.deleteAll = (req, res) => {

}

// Find All Published
exports.findAllPublished = (req, res) => {

}