module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Categories",
        key: "id",
      },
    },
  });
  Item.associate = models => {
    Item.belongsTo(models.Category, { foreignKey: "categoryId" });
    Item.hasMany(models.ItemVolume, { foreignKey: "itemId" });
  };
  return Item;
};
