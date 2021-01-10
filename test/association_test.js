const mongoose = require("mongoose");
const assert = require("assert");
const User = require("../src/user");
const Comment = require("../src/comment");
const BlogPost = require("../src/blogPost");

describe("Associations", () => {
  let joe, blogPost, comment;

  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    blogPost = new BlogPost({
      title: "My New Blog",
      content: "My new blog contents",
    });
    comment = new Comment({ content: "What a great post" });

    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    comment.user = joe;

    //all is a native JS function that takes an array of promises and combine them all into one promise.
    Promise.all([joe.save(), blogPost.save(), comment.save()]).then(() =>
      done()
    );
  });

  //.only makes sure that only one test will run
  it("saves a relation between a user and a blogPost", (done) => {
    User.findOne({ name: "Joe" })
      .populate("blogPosts")
      .then((user) => {
        assert(user.blogPosts[0].title === "My New Blog");
        //no recursive function to load up associations.
        done();
      });
  });

  it("saves a full relation graph", (done) => {
    User.findOne({ name: "Joe" })
      .populate({
        path: "blogPosts",
        populate: {
          path: "comments",
          model: "comment",
          populate: {
            path: "user",
            model: "user",
          },
        },
      })
      .then((user) => {
        assert(user.name === "Joe");
        assert(user.blogPosts[0].title === "My New Blog");
        assert(user.blogPosts[0].comments[0].content === "What a great post");
        done();
      });
  });
});
