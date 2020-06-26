
const Category = (sequelize, S) => {
    
    const C = sequelize.define('category', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },        
        type: {
            type: S.STRING,
            allowNull: false,
        },
        prod_method: {
            type: S.STRING,      
        },
        origin: {
            type: S.STRING,
        }
    });
    
    return C;
}

module.exports = Category;