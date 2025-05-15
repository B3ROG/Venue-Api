'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RoleManagement extends Model {
    static associate(models) {
      RoleManagement.hasMany(models.VenueUser, {
        foreignKey: 'role_id',
      });
    }
  }
  RoleManagement.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      role_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'RoleManagements',
      tableName: 'RoleManagements',
      timestamps: false,
      underscored: true,
    }
  );
  return RoleManagement;
};
