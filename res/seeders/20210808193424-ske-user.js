'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'SIKessEm',
      email: 'contact@sikessem.com',
      password: 'kjlkadfshklkjbjh bm,ashjcgvgjbkgbmj,sahgjv ghjfgdsvfvtfvdffjagsdfhhjsdavgfvxsgghf',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {
      where: {
        email: 'contact@sikessem.com',
      }
    });
  }
};
