const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('戶', {
    '戶號': {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    '門牌號碼': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '樓層': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '棟': {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    '編號': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '密碼': {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    '清潔日期': {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    '油漆日期': {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: '戶',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "戶號" },
        ]
      },
    ]
  });
};
