const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("showtags")
    .setDescription("shows all tags"),
  async execute(interaction) {
    const tagList = await Tags.findAll({ attributes: ["name"] });
    const tagString = tagList.map((t) => t.name).join(", ") || "No tags set.";

    return interaction.reply(`List of tags: ${tagString}`);
  },
};
