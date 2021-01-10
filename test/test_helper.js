const mongoose = require("mongoose");
const api = require("./api");

mongoose.Promise = global.Promise
//before is only called one time
before((done) => {
  mongoose.connect(api, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", (error) => {
      console.warn("Warning", error);
    });
});

beforeEach((done) => {
  // console.log(mongoose.connection.collections)
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});