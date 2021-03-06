var sort = require("sort-json-array");
var fileSave = require("./file-save.js");
var file = {};

function init(thisFile) {
  if (thisFile) {
    file = thisFile;
  } else {
    file = require("./file-get.js").fileGet();
  }
  sortJSON();
}

function sortJSON() {
  file.data = JSON.parse(file.data);
  file.data = sort(file.data, "date", "des");
  file.data = JSON.stringify(file.data, null, 2); // beautifies JSON string output
  fileSave.fileSave(file, "unminified", "The file was sorted.");
}

module.exports.init = init;
