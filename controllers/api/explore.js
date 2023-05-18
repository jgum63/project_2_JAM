// const router = require('express').Router();
// const { Workout, User } = require('../models');
// const withAuth = require('../../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//     try {
//       // Get all projects and JOIN with user data
//       const workoutData = await Workout.findAll({
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//       });
  
//       // Serialize data so the template can read it
//       const workouts = workoutData.map((workouts) => workouts.get({ plain: true }));
  
//       // Pass serialized data and session flag into template
//       res.render('explore', { 
//         workouts, 
//         logged_in: req.session.logged_in 
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  