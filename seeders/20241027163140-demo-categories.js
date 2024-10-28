module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Categories", [
      { name: "Electronics", createdAt: new Date(), updatedAt: new Date() },
      { name: "Furniture", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
