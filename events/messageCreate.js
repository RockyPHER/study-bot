const { Events } = require("discord.js");
const { client } = require("../index");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (!message.author.bot) {
      message.reply("testado!");
      console.log(message);
    }
  },
};
