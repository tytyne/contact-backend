'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.ARRAY(DataTypes.STRING),
    phone:DataTypes.ARRAY(DataTypes.STRING)
   
  
  }, { });


  return Contact;
};