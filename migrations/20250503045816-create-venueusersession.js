'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('VenueUserSessions', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
        allowNull: false
      },
      venueuserid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'VenueUsers',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      ip_address: {
        type: Sequelize.STRING, // Use raw SQL or change to Sequelize.STRING if CITEXT not supported directly
        allowNull: true
      },
      user_agent: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      login_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      logout_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('VenueUserSessions');
  }
};
