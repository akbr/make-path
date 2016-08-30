module.exports = function makePath(input) {
  var type;

  if (input === undefined) {
    return [];
  }

  type = typeof(input);

  if (type === "string") {
    return input.split(".");
  } else if (type === "number") {
    return [input];
  } else if (Array.isArray(input)) {
    return input;
  } else {
    throw new Error("Invalid input supplied for path. Expected string, number, or array.");
  }
};