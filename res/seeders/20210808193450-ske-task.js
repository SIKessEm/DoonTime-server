'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [{
      ownerId: 1,
      title: 'Make DoonTime',
      description: 'Build the design of DoonTime application',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {
      where: {
        title: 'Make DoonTime',
      }
    });
  }
};
