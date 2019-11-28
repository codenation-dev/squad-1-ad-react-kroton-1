module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('logs', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      log_environment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      log_source: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      log_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      log_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      log_title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      log_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('logs');
  },
};
