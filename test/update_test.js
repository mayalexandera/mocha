const assert = require("assert");
const User = require("../src/user");

describe("updating records", () => {
  let joe;
  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => done());
  });

  function assertName(operation, done) {
    operation
      .then(() => User.find({}))
      .then((users) => {
        assert(users.length === 1);
        assert(users[0].name === "Alex");
        done();
      });
  }

  it("instance type using set and save", (done) => {
    joe.set("name", "Alex");
    assertName(joe.save(), done);
  });

  it("a model instance can update", (done) => {
    assertName(joe.updateOne({ name: "Alex" }), done);
  });

  it('a model can find and update a record by id', (done) => {
    assertName(User.findByIdAndUpdate(joe._id, { name: "Alex"}), done)
  })

  it('a model can update postCount by 1', (done) => {
    User.updateOne({ name: "Joe" }, { $inc: { postCount: 1 } })
    .then(() => User.findOne({ name: "Joe" }))
    .then((user) => {
      assert(user.postCount === 1 )
      done()
    })
  })
});
/**
 * There are many ways to Update a record in db.
  ###################
  *** MODEL CLASS ***
  ###################
    * updateMany/updateOne (update a collection/instance)
    * findOneAndUpdate
    * findByIdAndUpdate
 * 
  ###################
  *** MODEL INSTANCE ***
  ###################
    * update (useful if you have direct instance)
    set() & save()
 */