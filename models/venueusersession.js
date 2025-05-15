'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VenueUserSession = sequelize.define('VenueUserSession', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    venueuserid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'VenueUsers',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    ip_address: {
      type: DataTypes.STRING,  // Adjust as necessary
      allowNull: false,
    },
    user_agent: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    login_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    logout_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'VenueUserSessions',
    timestamps: false,
  });

  return VenueUserSession;
};
