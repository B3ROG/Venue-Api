'use strict';
module.exports = (sequelize, DataTypes) => {
  const FailedLogin = sequelize.define('FailedLogin', {
     attempt_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    venueuserid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_address: {
      type: DataTypes.INET,
      allowNull: false
    },
    attempt_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    captcha_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'FailedLogins',
    timestamps: false
  });


  FailedLogin.associate = function(models) {
    FailedLogin.belongsTo(models.VenueUser, {
      foreignKey: 'venueuserid',
      as: 'venueUser'
    });
  };

  return FailedLogin;
};
