module.exports = function (botmsg) {
  if (botmsg === 'a') {
    var botmsg = "false";
    var sendData = require("./main.js")(botmsg);
  }
}