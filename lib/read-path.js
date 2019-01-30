const fs = require('fs')

var fromString = function(input) {
  var result = input.split("\n").filter(x => x.includes("PATH")).join(" ");
  result = result.replace("PATH=$PATH:", "");
  result = result.replace("PATH=", "");
  result = result.split(" ");
  return result;
};

var fromFile = function(filePath, encoding) {
  const cacheContent = fs.readFileSync(filePath, encoding)
  return fromString(cacheContent);
}

module.exports = {
  fromString,
  fromFile
};
