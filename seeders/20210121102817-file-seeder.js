'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Files', [{
      id: '1',
      path: 'testpath',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: '2',
      path: 'pathtest',
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
