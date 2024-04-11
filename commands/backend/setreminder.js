const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setreminder")
    .setDescription("Configure reminder.")
    .addStringOption((option) =>
      option
        .setName("Study Time")
        .setDescription("Define wich time you wanna study.")
        .setRequired(true)
        .addChoices({
          name: "00h00",
          value: "",
        })
    ),
  async execute(interaction) {},
};
