'use strict';
module.exports = (sequelize, DataTypes) => {
  const CaptchaChallenge = sequelize.define('CaptchaChallenge', {
    captcha_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    session_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    captcha_text: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    is_solved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    tableName: 'CaptchaChallenges',
    timestamps: false, // because we're manually managing created_at
  });

  CaptchaChallenge.associate = function(models) {
    CaptchaChallenge.belongsTo(models.VenueUser, {
      foreignKey: 'venueuserid',
      as: 'venueUser'
    });
  };

  return CaptchaChallenge;
};
