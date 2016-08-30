var assert = require("assert");
var makePath = require("./index");

assert.deepEqual(
  makePath(), []
);

assert.deepEqual(
  makePath("a"), ["a"]
);

assert.deepEqual(
  makePath("a.b.c"), ["a", "b", "c"]
);

assert.deepEqual(
  makePath(1), [1]
);

var path = ["foo", "bar", "baz"];
assert.equal(
  makePath(path), path
);

assert.throws(() => {
  makePath({})
});

console.log("Success!");