var DataTypes = require("sequelize").DataTypes;
var _月 = require("./月");

function initModels(sequelize) {
  var 月 = _月(sequelize, DataTypes);


  return {
    月,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
