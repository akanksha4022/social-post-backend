import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  username: { type: String }, // ✅ must be included
  text: { type: String },
  image: { type: String },
  likes: [{ type: String }],
  comments: [
    {
      username: { type: String },
      text: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

export default mongoose.model('Post', postSchema);
