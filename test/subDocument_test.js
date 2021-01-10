// const assert = require("assert");
// const User = require("../src/user");

// describe("Subdocuments", () => {
//   it("can create a subdocument", (done) => {
//     const joe = new User({
//       name: "Joe",
//       posts: [{ title: "my title" }],
//     });
//     joe
//       .save()
//       .then(() => User.findOne({ name: "Joe" }))
//       .then((user) => {
//         assert(user.posts[0].title === "my title");
//         done();
//       });
//   });

//   it("can add subdocuments to an existing record", (done) => {
//     const joe = new User({
//       name: "Joe",
//       posts: [],
//     });

//     joe
//       .save()
//       .then(() => User.findOne({ name: "Joe" }))
//       .then((user) => {
//         user.posts.push({ title: "another post" });
//         return user.save();
//       })
//       .then(() => User.findOne({ name: "Joe" }))
//       .then((user) => {
//         assert(user.posts[0].title === "another post");
//         done();
//       });
//   });

//   it("can remove subdocuments to an existing record", (done) => {
//     const joe = new User({
//       name: "Joe",
//       posts: [{ title: "another post" }],
//     });

//     joe
//       .save()
//       .then(() => User.findOne({ name: "Joe" }))
//       .then((user) => {
//         const post = user.posts[0]
//         post.remove()
//         return user.save()
//       })
//       .then(() => User.findOne({ name: "Joe" }))
//       .then((user) => {
//         assert(user.posts.length === 0);
//         done();
//       });
//   });
// });
