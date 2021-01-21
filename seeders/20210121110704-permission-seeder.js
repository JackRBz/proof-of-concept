'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [{
      id: '1',
      name: 'perm1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: '2',
      name: 'perm2',
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
