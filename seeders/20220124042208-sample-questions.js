'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Questions",
      [
        {
          type: "rose",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "thorn",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          type: "bud",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Questions', null, {});
  }
};
