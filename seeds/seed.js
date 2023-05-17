const sequelize = require('../config/connection');
const { User, Difficulty, Workout } = require('../models');

const difficulty = require('./difficulty.json');
const userData = require('./userData.json');
const workouts = require('./workoutData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
 await Difficulty.bulkCreate(difficulty, {
    individualHooks: true,
    returning: true,
  });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
 
  for (const workout of workouts) {
   await Workout.create(workout);
    
  }
  process.exit(0);
};

seedDatabase();
