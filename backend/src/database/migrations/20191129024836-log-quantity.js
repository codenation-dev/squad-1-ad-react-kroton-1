module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('logs', 'log_quantity', Sequelize.STRING);
  },

  down: queryInterface => {
    return queryInterface.removeColumn('logs', 'log_quantity');
  },
};
