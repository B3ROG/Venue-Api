'use strict';
module.exports = (sequelize, DataTypes) => {
  const PasswordReset = sequelize.define('PasswordReset', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Venues',
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    method: {
      type: DataTypes.ENUM('email', 'phone'),
      allowNull: false
    },
    destination: {
      type: DataTypes.TEXT
    },
    otp_code: {
      type: DataTypes.STRING(10)
    },
    reset_token: {
      type: DataTypes.TEXT
    },
    is_used: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    expires_at: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'PasswordResets',
    timestamps: true,  // Enables createdAt and updatedAt
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  PasswordReset.associate = function(models) {
    PasswordReset.belongsTo(models.Venue, {
      foreignKey: 'venue_id',
      as: 'venue'
    });
  };

  return PasswordReset;
};
