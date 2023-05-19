const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const Workout = require('./workout');

class User_Workout extends Model { }

User_Workout.init
(
 {
    id: 
     {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true,
     },
        
    user_id:
     {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },

    workout_id:
    {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'workout',
            key: 'id'
        }
        },
   
},

{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_workout'
}

);

module.exports = User_Workout;
