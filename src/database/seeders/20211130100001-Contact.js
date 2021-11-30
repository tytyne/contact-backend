'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    "Contacts",
    [
      {
        firstname: "florentine",
        lastname: "dusabeyezu",
        email: "user1@example.com",
        phone:"0781122334456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "florentine2",
        lastname: "dusabeyezu22",
        email: "user13@example.com",
        phone:"0781122334456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "florentine3",
        lastname: "dusabeyezu3",
        email: "user3@example.com",
        phone:"0781122334456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "florentine2",
        lastname: "dusabeyezu2",
        email: "user2@example.com",
        phone:"0781122334456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  ),

  down: (queryInterface) => queryInterface.bulkDelete("Contacts", null, {}),
};
