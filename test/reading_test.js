// const assert = require("assert");
// const User = require("../src/user");

// describe("reading users out of the database", () => {
//   let joe
//   beforeEach((done) => {
//     joe = new User({ name: "Joe" });
//     joe.save().then(() => done());
//   });

//   it("finds all users with a name of joe", (done) => {
//     User.find({ name: "Joe" }).then((users) => {
//       assert(users[0]._id.toString() === joe._id.toString())
//       //user._id === ObjectId object.  call .toString() to ids to extract string.
//       done();
//     });
//   });

//   it("finds a user with a particular id", (done) => {
//     User.findOne({ _id: joe.id }).then((user) => {
//       assert(user.name === "Joe")
//       done();
//     });
//   });
// });



// /**
//  * User.find(criteria) = find all the users that match the given criteria.
//  * returns an array.
//  *
//  * User.fineOne(criteria) = find the first user that matches the criteria.
//  * Returns a single record.
//  */
