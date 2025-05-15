'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Venues', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      org_id: {
  type: Sequelize.INTEGER,
  allowNull: false,
  references: {
    model: 'Orgs',  
    key: 'id'
  }
},
      venue_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100)
      },
      phone_number: {
        type: Sequelize.STRING(15)
      },
      alternate_phonenumber: {
        type: Sequelize.STRING(15)
      },
      address: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.STRING(100)
      },
      country: {
        type: Sequelize.STRING(100)
      },
      pincode: {
        type: Sequelize.STRING(20)
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      updated_by: {
        type: Sequelize.INTEGER
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Venues');
  }
};
