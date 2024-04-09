const { Events } = require("discord.js");
const { Tags } = require("../database/models");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    Tags.sync({ force: true })
      .then(
        console.log(`Data base synced!\nReady!\nLogged as ${client.user.tag}`)
      )
      .catch(console.error);
  },
};
