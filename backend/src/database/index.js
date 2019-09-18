import Sequelize from 'sequelize';

import User from '../app/models/User';
import Limit from '../app/models/Limit';
import Account from '../app/models/Account';
import Balance from '../app/models/Balance';
import Favorite from '../app/models/Favorite';
import Transfer from '../app/models/Transfer';

import databaseConfig from '../config/database';

const models = [User, Limit, Account, Balance, Favorite, Transfer];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
