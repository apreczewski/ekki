module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('transfers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      debit: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      credit: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      canceled: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      favorite_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'favorites', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('transfers');
  },
};
