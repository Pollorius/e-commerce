const { Sequelize, Model, DataTypes } = require("sequelize");


const User = (sequelize, S) => {
  
    U = sequelize.define('user', {
      id: {
        type: S.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 
      userName: {
        type: DataTypes.TEXT,
        isAdmin: false,
        unique: true,
        allowNull: false
      }, 
      name: {
        type: S.STRING,
        allowNull: false,
      },
      lastName: {
        type: S.STRING,
        allowNull: false,
      },
      email: {
        type: S.STRING,
        allowNull: false,
        isEmail: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      age: {
        type: S.INTEGER,
        allowNull: false
      
      },
      dni: {
        type: S.STRING,
        allowNull: false
      }, 
      address: {
        type: S.STRING,
        allowNull: false
      }
      
    });
    
    U.beforeCreate(async (user, options) => {
      const capBrand = user.userName.charAt(0).toUpperCase() + user.userName.slice(1);
      const capName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);
      user.userName = capBrand;
      user.lastName = capName
    });
  
    U.beforeUpdate(async (user, options) => {
      console.log(user)
      const capBrand = user.userName.charAt(0).toUpperCase() + user.userName.slice(1);
      const capName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);
      user.userName = capBrand;
      user.lastName = capName
    });
  
    return U;
  };
  
  
  module.exports = User;
  
