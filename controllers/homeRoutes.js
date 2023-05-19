const router = require('express').Router();
const { Workout, Difficulty } = require('../models');
const { User_Workout, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/explore', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const workoutData = await Workout.findAll({
      include: [
        {
          model: Difficulty
        },
      ],
    });

    // Serialize data so the template can read it
    const workouts = workoutData.map((workouts) => workouts.get({ plain: true }));
    console.log(workouts)
    console.log("hello world")
    // Pass serialized data and session flag into template
    res.render('explore', { 
      workouts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {

    console.log(err)
   res.status(500).json(err.message);
  }
});
// this would be for a singular workout
// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Workout.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('create', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  console.log("hit profile route")
  // console.log(req.session)

    try {
  const workoutData = await User_Workout.findAll({
    include: [{
      model: Workout
    }],
    where: {
      user_id: req.session.user_id,
  },
  });
  // console.log(workoutData)
    const workouts = workoutData.map((workouts) => workouts.get({ plain: true }));
  console.log(workouts)
  res.render('profile', {
    workouts,
    logged_in: true
  });
} catch (err) {

  console.log(err)
 res.status(500).json(err.message);
}
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//create workouts page
router.get('/create', (req, res) => {
  res.render('create');
});

module.exports = router;
