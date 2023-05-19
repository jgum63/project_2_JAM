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

Difficulty.hasOne(Workout);
Workout.belongsTo(Difficulty)


User_Workout.belongsTo(User, {through: User_Workout});
User_Workout.belongsTo(Workout,{through: User_Workout})

module.exports = { User, Workout, Difficulty, User_Workout };
