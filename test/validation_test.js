// const assert = require("assert");
// const User = require("../src/user");

// describe("Validating records", () => {
//   it("requires a given name", () => {
//     //validate given name was provided
//     const user = new User({ name: undefined });

//     //validateSync is a synchronous process
//     //validate (does not return a result, returns promise - can be passed a callback function)
//     //validationResult is an Error Object
//     const validationResult = user.validateSync();
//     const { message } = validationResult.errors.name;

//     assert(message === "Given name is required.");
//   });

//   it("requires given name is more than two characters", () => {
//     //validates length of given name.
//     const user = new User({ name: "Al" });
//     const validationResult = user.validateSync();
//     const { message } = validationResult.errors.name;

//     assert(message === "Given name must be longer than 2 characters.");
//   });

//   it("disallows invalid records from being saved", (done) => {
//     const user = new User({ name: "Al" });
//     user.save()
//       .catch((validationResult) => {
//       const { message } = validationResult.errors.name;
//       assert(message === "Given name must be longer than 2 characters.");
//       done()
//     });
//   });
// });
