const Post = require('../../models/post');
const Comment = require('../../models/comment');
const User = require('../../models/user');

const router = require('express').Router();

// Get all posts with associated comments
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }, { model: Comment }],
    });
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a specific post with associated comments by its `id`
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment }],
    });
    if (!postData) {
      res.status(400).json({ message: "Post not found" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new comment under a post
router.post('/:postId/comments/new', async (req, res) => {
  try {
    const { postId } = req.params;
    req.body.postId = postId; // Associate the comment with the post
    const commentData = await Comment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a comment by its `id`
router.delete('/comments/:commentId', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.commentId,
      },
    });
    if (!commentData) {
      res.status(400).json({ message: "Comment not found." });
      return;
    }
    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json(error);
  }
});

module.exports = router;