const assert = require("assert");
const add = require("../add");

describe("Add function", () => {
  it("adds two numbers", () => {
    assert.equal(add(2, 3), 5);
  });
});
