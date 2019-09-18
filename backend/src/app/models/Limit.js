import Sequelize, { Model } from 'sequelize';

class Limit extends Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Limit;
