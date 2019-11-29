import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Log from '../app/models/Log';

const models = [User, Log];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection, Sequelize.DataTypes))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
