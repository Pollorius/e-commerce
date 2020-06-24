
const Category = (sequelize, S) => {
    
    const C = sequelize.define('category', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        presentacion: {
            type: S.STRING,
            allowNull: false,
        },
        tipo: {
            type: S.STRING,
            allowNull: false,
        },
        fabricacion: {
            type: S.STRING,      
        },
        procedencia: {
            type: S.STRING,
        }
    });

    return C;
}

module.exports = Category;