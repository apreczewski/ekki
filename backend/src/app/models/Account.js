import Sequelize, { Model } from 'sequelize';

class Account extends Model {
  static init(sequelize) {
    super.init(
      {
        ag: Sequelize.STRING,
        number: Sequelize.STRING,
        sum: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Limit, { foreignKey: 'limit_id' });
  }
}

export default Account;
