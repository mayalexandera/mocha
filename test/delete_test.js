const assert = require("assert");
const User = require("../src/user");

describe("Deleting a user", () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => done());
  });

  it("model instance remove", (done) => {
    joe
      .remove()
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it("class method remove", (done) => {
    //remove a bunch of records with some given criteria.
    User.deleteMany({ name: "Joe" })
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        assert(user === null);
        done();
      });
  });

  it("class method findOneAndRemove", (done) => {
    User.findOneAndDelete({ name: "Joe" })
    .then(() => User.findOne({ name: "Joe" })).then((user) => {
      assert(user === null);
      done();
    });
  });

  it("class method findByIdAndRemove", (done) => {
    User.findByIdAndDelete(joe._id)
      .then(() => User.findOne({ name: "Joe" }))
      .then((user) => {
        assert(user === null );
        done();
      });
  });
});

/**
 * There are many ways to delete a record in db.
  ###################
  *** MODEL CLASS ***
  ###################
    * deleteMany/deleteOne (remove a collection)
    * findOneAndDelete
    * findByIdAndDelete
 * 
  ###################
  *** MODEL INSTANCE ***
  ###################
    * remove (useful if you have direct instance)
 */
