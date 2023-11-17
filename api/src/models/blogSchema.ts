import mongoose, { deleteModel } from "mongoose";

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
        commentBy: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "User",
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        commentedOn : {
          type : String,
          default : new Date(),
          required : true
        }
      },
    ],
    tags : [
      {
        type : String,
        required : true
      }
    ],
    likes: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    ],
    disLikes: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
