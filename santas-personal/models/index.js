const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.post = require("./post.js")(sequelize, Sequelize);
/*
db.mountain = require("./mountain.js")(sequelize, Sequelize);
db.comment = require("./comment.js")(sequelize, Sequelize);
db.bookmark = require("./bookmark.js")(sequelize, Sequelize);
*/
module.exports = db;