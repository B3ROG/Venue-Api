'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CaptchaChallenges', {
      captcha_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true, // equivalent to SERIAL
        allowNull: false,
      },
      session_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'VenueUserSessions', // name of the referenced table
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      captcha_text: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      is_solved: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('CaptchaChallenges');
  }
};
