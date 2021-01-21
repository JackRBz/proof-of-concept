'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Grants', [{
      id: '1',
      name: 'grant1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: '2',
      name: 'grant2',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
