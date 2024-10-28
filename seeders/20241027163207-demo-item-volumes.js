module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("ItemVolumes", [
      { itemId: 1, value: 10, price: 100, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 2, value: 5, price: 50, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 3, value: 20, price: 200, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 4, value: 15, price: 150, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 5, value: 8, price: 80, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 6, value: 3, price: 30, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 7, value: 6, price: 60, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 8, value: 4, price: 40, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 9, value: 12, price: 120, createdAt: new Date(), updatedAt: new Date() },
      { itemId: 10, value: 7, price: 70, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("ItemVolumes", null, {});
  },
};
