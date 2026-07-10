const express= require('express');
const Workout=require('../Models/workoutmodel');
const { createWorkout, GetWorkouts, GetWorkout, updateWorkout, deleteWorkout } = require('../Controllers/workoutController');
const requireAuth= require('../MiddleWare/requireAuth')
const router=express.Router()

//require auth for all workout routes
router.use(requireAuth)

/*
 Route: /api/workouts
 Method: GET
 Description: Get all the workouts
 Access: Public
 Parameters: None
*/
router.get('/',GetWorkouts)

/*
 Route: /api/workouts/:id
 Method: GET
 Description: Get a single the workout by id
 Access: Public
 Parameters: id
*/
router.get('/:id',GetWorkout)
/*
 Route: /api/workouts/:id
 Method: POST
 Description:  Create/Add a new workout
 Access: Public
 Parameters: None
*/
router.post('/',createWorkout)
/*
 Route: /api/workouts/:id
 Method: Delete
 Description:  Delete workout by id
 Access: Public
 Parameters: id
*/
router.delete('/:id',deleteWorkout)
/*
 Route: /api/workouts/:id
 Method: Patch
 Description:  Delete workout by id
 Access: Public
 Parameters: id
*/
router.patch('/:id',updateWorkout)




module.exports=router