const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Difficulty extends Model { }

Difficulty.init
(
 {
    id:
    {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
                
    difficulty:
    {
        type: DataTypes.STRING,
        allowNull: false
    }
 },
            
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'difficulty'
}

);

module.exports = Difficulty;
