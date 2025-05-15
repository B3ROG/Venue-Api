'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FailedLogins', {
      attempt_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      venueuserid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'VenueUsers', // must match the actual table name
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      ip_address: {
        type: Sequelize.INET,
        allowNull: false
      },
      attempt_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      captcha_verified: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('FailedLogins');
  }
};
