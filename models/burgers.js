module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN, 
        createdAt: DataTypes.DATE, 
        updatedAt: DataTypes.DATE, 
    });
    return Burger;
}