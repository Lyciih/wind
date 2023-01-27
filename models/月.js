const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('月', {
    '月份': {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    '風速': {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    '風向': {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: '月',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "月份" },
        ]
      },
    ]
  });
};
