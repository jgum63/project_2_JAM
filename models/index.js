const User = require('./user');
const Workout = require('./workout');
const Difficulty = require('./difficulty');
const User_Workout = require('./user_workout');

User.belongsToMany(Workout, {
  through: User_Workout
});

Workout.belongsToMany(User, {
  through: User_Workout
});

Difficulty.hasMany(Workout,{});

User_Workout.hasOne(User, {});

module.exports = { User, Workout, Difficulty, User_Workout };
