module.exports = function (botmsg) {
// things to allow the bot to run
const Discord = require("discord.js");
const Settings = require("./settings.js");
const config = require("./config.json");

const client = new Discord.Client();

// set the prefix for the server
var prefix = "-";

// set all the apps for the server
const Apps = ["main", "mod"];

// get all the apps loaded
client.once('ready', () => {
  for (var a = 0; a < Apps.length; a++) {
    var includeapp = require("./apps/" + Apps[a] + "/main.js")(prefix, botmsg, client);
  }
});

console.log("Logging in...")
// login as the bot
client.login(config.BOT_TOKEN);

// set the bots status
client.once('ready', () => {
  console.log('Logged in successfully.');
  client.user.setActivity(`${prefix}help`, { type: 'LISTENING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
});
}