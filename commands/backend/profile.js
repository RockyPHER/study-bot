const { SlashCommandBuilder } = require("discord.js");
const { User } = require("../../database/models");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("profile")
    .setDescription("Shows profile info."),
  async execute(interaction) {
    const search_user = interaction.user.username;
    const find_user = await User.findOne({ where: { username: search_user } });

    if (find_user) {
      return interaction.reply(
        `User ${search_user} find!\nRank: ${find_user.rank}\nPoints: ${find_user.points}\nStreak Record: ${find_user.streak}\nTotal Studies: ${find_user.studies}\nTotal Summaries: ${find_user.summaries}\nGoals Achieve: ${find_user.achievements}\nMinutes Studied: ${find_user.min_studied}\n`
      );
    }

    return interaction.reply(
      `User not registered, please use \`/register\` to register`
    );
  },
};
