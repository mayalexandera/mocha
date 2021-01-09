const mongoose = require("mongoose");
const api = require('./api')

//before is only called one time
before((done) => {
  mongoose.connect(api,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  mongoose.connection
    .once("open", () => { done() })
    .on("error", (error) => {
      console.warn("Warning", error);
    });
})


beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
