const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Import all models
db.Venue = require('./venue')(sequelize, Sequelize.DataTypes);
db.VenueUser = require('./venueuser')(sequelize, Sequelize.DataTypes);
db.PasswordReset = require('./passwordreset')(sequelize, Sequelize.DataTypes);
db.FailedLogin = require('./failedlogin')(sequelize, Sequelize.DataTypes);
db.CaptchaChallenge = require('./captchachallenge')(sequelize, Sequelize.DataTypes);
db.VenueUserSession = require('./venueusersession')(sequelize, Sequelize.DataTypes);

// Associations
db.Venue.hasMany(db.VenueUser, { foreignKey: 'venueid' });
db.VenueUser.belongsTo(db.Venue, { foreignKey: 'venueid' });

db.Venue.hasMany(db.PasswordReset, { foreignKey: 'venueid' });
db.PasswordReset.belongsTo(db.Venue, { foreignKey: 'venueid' });

db.VenueUser.hasMany(db.FailedLogin, { foreignKey: 'venueuserid' });
db.FailedLogin.belongsTo(db.VenueUser, { foreignKey: 'venueuserid' });

db.VenueUser.hasMany(db.VenueUserSession, { foreignKey: 'venueuserid' });
db.VenueUserSession.belongsTo(db.VenueUser, { foreignKey: 'venueuserid' });

db.VenueUserSession.hasMany(db.CaptchaChallenge, { foreignKey: 'session_id' });
db.CaptchaChallenge.belongsTo(db.VenueUserSession, { foreignKey: 'session_id' });

// Export
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
