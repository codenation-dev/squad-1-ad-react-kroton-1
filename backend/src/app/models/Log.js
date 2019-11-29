import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        log_environment: Sequelize.STRING,
        log_source: Sequelize.STRING,
        log_date: Sequelize.DATE,
        log_type: Sequelize.STRING,
        log_title: Sequelize.STRING,
        log_description: Sequelize.STRING,
        log_quantity: Sequelize.NUMBER,
        archived: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
  }
}

export default User;
