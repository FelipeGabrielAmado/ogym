const { Router } = require('express');
const router = Router();

const { getWorkouts } = require('../controllers/index.controller');

router.get('/workouts', getWorkouts);

module.exports = router;