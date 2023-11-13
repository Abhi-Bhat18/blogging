import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    bannerUrl: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Comment",
      },
    ],
    likes: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    likeCount: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    disLikes: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    disLikeCount: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
