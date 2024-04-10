const { SlashCommandBuilder } = require("discord.js");
const { User } = require("../../database/models");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("register user"),
  async execute(interaction) {
    try {
      const user = await User.create({
        username: interaction.user.username,
        rank: null,
        streak: 0,
        points: 0,
        studies: 0,
        summaries: 0,
        achievements: 0,
        min_studied: 0,
        has_reminder: false,
      });

      return interaction.reply(`User ${user.username} added. ✅`);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        return interaction.reply("User already registered! ☑️");
      }
      return interaction.reply("Something went wrong with adding a tag. ❌");
    }
  },
};
