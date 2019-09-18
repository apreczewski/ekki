import Sequelize, { Model } from 'sequelize';

class Transfer extends Model {
  static init(sequelize) {
    super.init(
      {
        debit: Sequelize.FLOAT,
        credit: Sequelize.FLOAT,
        canceled: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Favorite, { foreignKey: 'favorite_id' });
  }
}

export default Transfer;
