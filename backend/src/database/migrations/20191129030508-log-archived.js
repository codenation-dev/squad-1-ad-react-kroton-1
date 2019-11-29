module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('logs', 'archived', {
      type: Sequelize.STRING,
      defaultValue: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('logs', 'archived');
  },
};
