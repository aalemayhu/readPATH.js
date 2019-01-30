var fromString = function(input) {
  var result = input.split("\n").join(" ");
  result = result.replace("PATH=$PATH:", "");
  result = result.replace("PATH=", "");
  result = result.split(" ");
  return result;
};

module.exports = {
  fromString
};
