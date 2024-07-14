const Post = require('../../models/post');
const User = require('../../models/user');

const router = require('express').Router();

// The `/api/Post` endpoint
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// find one Post by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (!postData) {
      res.status(400).json({ message: "not found" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/new', async (req, res) => {
  console.log(req.body)
  if (req.session.loggedIn)
    try {
      req.body.postAuthor = req.session.user_id
      console.log(req.body);
      const postData = await Post.create(req.body);
      res.status(200).json(postData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  // create a new Post
});

router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!postData[0]) {
      res.status(400).json({ message: "Category is not found." });
      return;
    }
    res.status(200).json(postData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
  // update a Post by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });
    console.log(postData);
    if (!postData) {
      res.status(400).json({ message: "Category is not found." });
      return;
    }

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error('Error deleting Post:', error);
    res.status(500).json(error);
  }
});
module.exports = router;