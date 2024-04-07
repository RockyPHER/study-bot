const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`<study-bot>: Ready! Logged as ${client.user.tag}`);
  },
};
