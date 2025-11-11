import express from 'express';
import {
  createPost,
  getAllPosts,
  likePost,
  commentPost,
} from '../controllers/postController.js';

const router = express.Router();

router.post('/create', createPost);
router.get('/feed', getAllPosts);
router.post('/like', likePost);
router.post('/comment', commentPost);

export default router;
