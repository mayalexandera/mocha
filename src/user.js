const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = require("./post");
const BlogPostSchema = require("./blogPost");

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
  likes: Number,
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: "blogPost"
  }]
});

UserSchema.virtual("postCount").get(function() {
  return this.posts.length
});

UserSchema.pre('remove', function(next) {
  const BlogPost = mongoose.model('blogPost')

  /**
   * remove() takes in a nested object.  first property is what to 
   * search by - in this case it is the _id property. 
   * $in is mongo operator saying to select the instances whose _id 
   * is included in this instance of the User class.  
   */
  BlogPost.deleteMany({ _id: { $in: this.blogPosts } })

  //next function calls next middleware || continue with request.
  .then(() => next())

})

const User = mongoose.model("user", UserSchema);

module.exports = User;
 