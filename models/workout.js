const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init
  (
    {
      id:  
      {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
          
      name: 
      {
        type: DataTypes.STRING,
        allowNull: false,
      },

      sets: 
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
      reps: 
      {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      day:
      {
        type: DataTypes.INTEGER
      },
        difficulty_id:
      {
          type:DataTypes.INTEGER,
          references:
          {
              model:"difficulty",
              key:"id"
          }
  
  
      }
    },
    
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'workout'
      }
  );

module.exports = Workout;
