const Workout= require('../Models/workoutmodel')
const mongoose=require('mongoose')
//get all workouts
exports.GetWorkouts= async(req,res)=>{
        const user_id=req.user._id
    const workouts = await Workout.find({user_id}).sort({createdAt:-1})
  
    res.status(200).json(workouts)
    
}
//get workout by id
exports.GetWorkout= async(req,res)=>{
    const id=req.params.id
       if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            error: "Invalid Workout Id"
        })
    }
    const workout= await Workout.findById(id)
    if(!workout){
        return res.status(404).json({
            error:"No Such Workout"
        })
    }
       res.status(200).json(workout)
}
// delete a workout by id
exports.deleteWorkout= async(req,res)=>{
    const id=req.params.id
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            error: "Invalid Workout Id"
        })
    }
    const workout= await Workout.findByIdAndDelete(id)
    if(!workout){
        return res.status(404).json({
            error: " No such Workout To Delete"
        })
    }
res.status(200).json(workout)

}
// update a workout by id
exports.updateWorkout= async(req,res)=>{
    const id=req.params.id
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({
            error: "Invalid Workout Id"
        })
    }
    const workout= await Workout.findByIdAndUpdate(id,req.body,{new:true, runValidators: true}) // i did new true to get updated workout in return and run validators to ensure schema rules are not broken

if(!workout){
    return res.status(404).json({
        error: "No workout Found to be updated"
    })
}
res.status(200).json({
        message: " Workout Updated Successfully",workout
    })
}
// create a workout
exports.createWorkout=async(req,res)=>{
    
    const {title,load,reps,user_id}=req.body;
    let emptyFields=[];
    if(!title){
        emptyFields.push('title')
    } if(!load){
        emptyFields.push('load')
    } if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length>0){
        return res.status(400).json({
            error: 'Please fill out all the fields',emptyFields
        })
    }
    try{
        const user_id=req.user._id
         const workout= await Workout.create({title,load,reps,user_id})
         res.status(201).json(workout)
    }catch(error){
           res.status(400).json({
            error : error.message
           })
    }
}
