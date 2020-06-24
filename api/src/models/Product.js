
const Product = (sequelize, S) => {
  // defino el modelo
  // console.log()
   P = sequelize.define('product', {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    marca: {
      type: S.STRING,
      allowNull: false,
    },
    nombre: {
      type: S.STRING,
    },
    
  });
  
  return P;
};

module.exports = Product;
