import { Model } from 'sequelize';

class Favorite extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.belongsTo(models.Account, { foreignKey: 'account_id' });
  }
}

export default Favorite;
