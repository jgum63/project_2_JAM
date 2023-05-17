const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const Workout = require('./workout');

class User_Workout extends Model { }

User_Workout.init
(
 {
    workouts: 
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
    },

    workout_id:
    {
        type: DataTypes.STRING,
        allowNull: false,
        },

    workout_date:
    {
        type: DataTypes.DATE,
        allowNull: false
    }
   
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
