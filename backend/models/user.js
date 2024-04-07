const User = sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  rank: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  streak: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  //   points: {
  //     type: Sequelize.INTEGER,
  //     defaultValue: 0,
  //     allowNull: false,
  //   },
  //   studies: {
  //     type: Sequelize.INTEGER,
  //     allowNull: true,
  //   },
  //   summaries: {
  //     type: Sequelize.INTEGER,
  //     allowNull: true,
  //   },
  //   achievements: {
  //     type: Sequelize.INTEGER,
  //     allowNull: true,
  //   },
  //   time_studied: {
  //     type: Sequelize.INTEGER,
  //     defaultValue: 0,
  //     allowNull: false,
  //   },
});
