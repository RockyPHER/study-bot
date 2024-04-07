const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    Users.sync({ force: true });
    console.log(`Ready! Logged as ${client.user.tag}`);
  },
};
