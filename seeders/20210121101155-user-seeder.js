'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Users', [{
      first_Name: 'Dim',
      last_Name: 'Kal',
      email: 'test@mail.com',
      password: '123123123',
      createdAt: new Date(),
      updatedAt: new Date(),
      // RoleId: '2'
    },{
      first_Name: 'John',
      last_Name: 'Snow',
      email: 'snow@mail.com',
      password: '321321321',
      createdAt: new Date(),
      updatedAt: new Date(),
      // RoleId: '1'
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
