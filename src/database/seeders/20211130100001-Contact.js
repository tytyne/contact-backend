'use strict';
const {hashPassword}=require("../../utils/hash");
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await queryInterface.bulkInsert(
     "Users", [
    {
    name:'tytyne123',
    email:'dusaflora2@gmail.com',
    password: await hashPassword("tytyne1234"),
    createdAt: new Date(),
    updatedAt: new Date(),
    },
    {
      name:'fimboo',
      email:'fimbofinance@gmail.com',
      password: await hashPassword("tytyne1234"),
      createdAt: new Date(),
      updatedAt: new Date(),
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete("Users", null, {});
     
  }
};
