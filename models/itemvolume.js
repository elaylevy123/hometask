module.exports = (sequelize, DataTypes) => {
  const ItemVolume = sequelize.define("ItemVolume", {
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Items",
        key: "id",
      },
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });
  ItemVolume.associate = models => {
    ItemVolume.belongsTo(models.Item, { foreignKey: "itemId" });
  };
  return ItemVolume;
};
