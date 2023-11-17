import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    role: {
      type: String,
      enum: ["USER", "WRITER", "ADMIN"],
      required: true,
      default: "USER",
    },
    blogs: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Blog",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
