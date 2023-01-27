const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    '空': {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    '店面': {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    '未初驗': {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    '未售戶': {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    '已交屋': {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    '可交屋': {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    '複驗OK可交屋': {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    '優先戶': {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    '已複驗': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    '密碼': {
      type: DataTypes.CHAR(4),
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
    '戶號': {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    '門牌號碼': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    '給業務約': {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    '已排驗屋': {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    '目標日期': {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    '預估': {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    '等泥作': {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    '油漆完成': {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    '清潔完成': {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    '大門缺失': {
      type: DataTypes.CHAR(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
