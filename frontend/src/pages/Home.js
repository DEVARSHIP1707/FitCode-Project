import React, { useEffect} from "react";
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../Hooks/useWorkoutContext";
import { useAuthContext } from "../Hooks/userContext";
const Home = () => {
   //with help of useState
//   const [workouts, setWorkouts] = useState([]);
  const {workouts,dispatch}=useWorkoutsContext()
  const {user}=useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts",{
          headers:{
            'Authorization':`Bearer ${user.token}`
          }
        });
        const json = await response.json();

      //   console.log("Response:", response);
      //   console.log("JSON:", json);

        if (response.ok) {
          dispatch({type:'SET_WORKOUTS',payload:json})
        }
      } catch (err) {
        console.error(err);
      }
    }
    if(user){
  fetchWorkouts();
    }
  }, [dispatch,user]);

  console.log("State:", workouts);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
        <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  );
};

export default Home;