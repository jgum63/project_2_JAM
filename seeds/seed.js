const sequelize = require('../config/connection');
const { User, Difficulty, Workout } = require('../models');

const userData = require('./userData.json');
const workout = require('./workoutData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const workoutData = await Workout.bulkCreate(workout, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
