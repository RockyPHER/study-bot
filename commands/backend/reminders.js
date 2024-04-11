const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reminder")
    .setDescription("Shows reminders"),
  async execute(interaction) {},
};
