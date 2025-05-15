'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Org extends Model {
    static associate(models) {
      Org.hasMany(models.Venue, {
        foreignKey: 'org_id',
        as: 'venues'
      });
    }
  }

  Org.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: DataTypes.STRING(100),
    phone_number: DataTypes.STRING(15),
    address: DataTypes.TEXT,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orgs',
    tableName: 'Orgs',
    underscored: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return Org;
};
