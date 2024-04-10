const { Events } = require("discord.js");
const { User, Reminder, Goal } = require("../database/models");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    Promise.all([User.sync(), Reminder.sync(), Goal.sync()])
      .then(
        console.log(`Data base synced!\nReady!\nLogged as ${client.user.tag}`)
      )
      .catch(console.error);
  },
};
