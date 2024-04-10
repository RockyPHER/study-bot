const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "user", "password", {
  host: "localhost",
  dialect: "sqlite",
  loggin: false,
  storage: "database.sqlite",
});

const User = sequelize.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  rank: Sequelize.INTEGER,
  streak: Sequelize.INTEGER,
  points: Sequelize.INTEGER,
  studies: Sequelize.INTEGER,
  summaries: Sequelize.INTEGER,
  achievements: Sequelize.INTEGER,
  min_studied: Sequelize.INTEGER,
  has_reminder: Sequelize.BOOLEAN,
});

const Reminder = sequelize.define("reminder", {
  userID: Sequelize.INTEGER,
  study_time: Sequelize.STRING,
  max_time: Sequelize.INTEGER,
  is_active: Sequelize.BOOLEAN,
});

const Goal = sequelize.define("goal", {
  userID: Sequelize.INTEGER,
  streak: Sequelize.INTEGER,
  studies: Sequelize.INTEGER,
  min_studied: Sequelize.INTEGER,
  summaries: Sequelize.INTEGER,
  description: Sequelize.STRING,
  is_achieved: Sequelize.BOOLEAN,
});

module.exports = { User, Goal, Reminder };
