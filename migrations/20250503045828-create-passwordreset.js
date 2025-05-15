'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PasswordResets', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      venue_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Venues',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      method: {
        type: Sequelize.ENUM('email', 'phone'),
        allowNull: false
      },
      destination: {
        type: Sequelize.TEXT
      },
      otp_code: {
        type: Sequelize.STRING(10)
      },
      reset_token: {
        type: Sequelize.TEXT
      },
      is_used: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      expires_at: {
        type: Sequelize.DATE
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('PasswordResets');
  }
};
