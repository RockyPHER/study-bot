module.exports = {
  data: SlashCommandBuilder()
    .setName("adduser")
        .setDescription("adds a new user"),
    async execute(interaction) {
        try {
            const user = await interaction.User.create({
                name: interaction.user.name,
                
            })
        }
    }
};
