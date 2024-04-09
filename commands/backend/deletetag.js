const { SlashCommandBuilder } = require("discord.js");
const { Tags } = require("../../database/models");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("deletetag")
    .setDescription("deletes existing tag"),
  async execute(interaction) {
    const tagName = interaction.options.getString("name");
    // equivalent to: DELETE from tags WHERE name = ?;
    const rowCount = await Tags.destroy({ where: { name: tagName } });

    if (!rowCount) return interaction.reply("That tag doesn't exist.");

    return interaction.reply("Tag deleted.");
  },
};
