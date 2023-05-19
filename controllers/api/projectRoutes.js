const router = require('express').Router();
const { Workout, User_Workout } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    
    const newWorkout = await Workout.create({
      ...req.body,
      id: req.params.id,
    });
    // console.log(newWorkout) // looking for id here
    // refer to model table for what this create needs
    // user_id and workout_id
    let workout = newWorkout.get({ plain: true })
    console.log(workout)
    const addWorkoutToUser = await User_Workout.create({
      workout_id: workout.id, // just workout_id
      user_id: req.session.user_id,
    });
    res.status(200).json(addWorkoutToUser);
  } catch (err) {
    console.log(err)
    res.status(400).json(err.message);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const workoutData = await Workout.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!workoutData) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
