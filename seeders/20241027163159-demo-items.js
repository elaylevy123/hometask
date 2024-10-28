module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Items", [
      { name: "Smartphone", categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Tablet", categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Laptop", categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "TV", categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Headphones", categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: "Couch", categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Chair", categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Table", categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Shelf", categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: "Desk", categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Items", null, {});
  },
};
