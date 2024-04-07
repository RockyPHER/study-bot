const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 10,
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("replies pong"),
  async execute(interaction) {
    await interaction.reply({ content: "Pong!", ephemeral: true });
  },
};
