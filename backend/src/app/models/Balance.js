import Sequelize, { Model } from 'sequelize';

class Balance extends Model {
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

  static associate(models) {
    this.belongsTo(models.Account, { foreignKey: 'account_id' });
  }
}

export default Balance;
