const { Events } = require("discord.js");
const { Sequelize } = require("sequelize");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    const sequelize = new Sequelize("database", "user", "password", {
      host: "localhost",
      dialect: "sqlite",
      loggin: false,
      storage: "database.sqlite",
    });

    const Tags = sequelize.define("tags", {
      name: {
        type: Sequelize.STRING,
        unique: true,
      },
      description: Sequelize.TEXT,
      username: Sequelize.STRING,
      usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
    });

    Tags.sync({ force: true });
    console.log(`Ready! Logged as ${client.user.tag}`);
  },
};
