const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = require("./post");

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Given name is required."],
    validate: {
      validator: (name) => name.length > 2,
      message: "Given name must be longer than 2 characters.",
    },
  },
  posts: [PostSchema],
  likes: Number
});

UserSchema.virtual("postCount").get(function () {
  return this.posts.length
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
