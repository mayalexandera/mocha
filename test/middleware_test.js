const mongoose = require("mongoose");
const assert = require("assert");
const User = require("../src/user");
const BlogPost = require("../src/blogPost");

describe("Middleware", () => {
  let joe, blogPost;
  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    blogPost = new BlogPost({
      title: "My New Blog",
      content: "My new blog contents",
    });
    joe.blogPosts.push(blogPost);

    //all is a native JS function that takes an array of promises and combine them all into one promise.
    Promise.all([joe.save(), blogPost.save()]).then(() => done());
  });

  it("users clean up dangling blogposts on remove", (done) => {
    joe
      .remove()
      .then(() => BlogPost.countDocuments())
      .then((result) => {
        assert(result === 0)
        done();
      });
  });
});
