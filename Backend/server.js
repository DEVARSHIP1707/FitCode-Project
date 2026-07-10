const express= require('express')
const dotenv=require('dotenv')
const mongoose =require('mongoose')

const workoutRoutes=require('./Routes/workout')
const userRoutes=require('./Routes/user')
dotenv.config()
const app= express();
const PORT=process.env.PORT;
//MiddleWare
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
//Routes
app.get('/',(req,res)=>{
    res.status(200).json({
        message: "Welcome to the Application"
    })
})
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Connected to MongoDB");
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });