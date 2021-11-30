'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone:DataTypes.STRING
    // userId: DataTypes.INTEGER
  
  }, { });
//   Contact.associate = function(models) {
//   Contact.belongsTo(models.User, {
//     foreignKey: 'userId',
//     as: 'author',
//     onDelete: 'CASCADE',
//   })
// };

  return Contact;
};