import Post from '../models/postModel.js';
import User from '../models/userModel.js';

// Create new post
export const createPost = async (req, res) => {
  const { userId, text, image } = req.body;

  try {
    console.log("📩 Create Post Request:", req.body);

    // ✅ Find the user who is creating the post
    const user = await User.findById(userId);

    if (!user) {
      console.log("❌ User not found for ID:", userId);
      return res.status(404).json({ message: 'User not found' });
    }

    // ✅ Create a new post with username included
    const newPost = new Post({
      userId: user._id,
      username: user.username, // 👈 this is what stores the username
      text,
      image,
    });

    const savedPost = await newPost.save();

    console.log("✅ Post created:", savedPost);

    res.status(201).json(savedPost);
  } catch (error) {
    console.error("❌ Error creating post:", error);
    res.status(500).json({ message: 'Error creating post', error });
  }
};


// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts', error });
  }
};

// Like a post
export const likePost = async (req, res) => {
  const { postId, username } = req.body;

  console.log('🟡 Like request received:', req.body); // debug line

  try {
    if (!postId || !username) {
      return res.status(400).json({ message: 'Missing postId or username' });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    console.log('🟢 Found post:', post._id, 'Likes before:', post.likes);

    const alreadyLiked = post.likes.includes(username);

    if (alreadyLiked) {
      post.likes = post.likes.filter((name) => name !== username);
    } else {
      post.likes.push(username);
    }

    await post.save();

    console.log('🟢 Likes after:', post.likes);

    res.status(200).json(post);
  } catch (error) {
    console.error('❌ Error in likePost:', error);
    res.status(500).json({ message: 'Error updating like', error });
  }
};


// Comment on a post
export const commentPost = async (req, res) => {
  const { postId, username, text } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post)
      return res.status(404).json({ message: 'Post not found' });

    post.comments.push({ username, text });
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error adding comment', error });
  }
};
