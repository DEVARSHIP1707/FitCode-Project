import  {useAuthContext} from './userContext'
import { useWorkoutsContext } from './useWorkoutContext'


export const useLogout=()=>{
    const {dispatch}=useAuthContext()
    const {dispatch:workoutsDispatch}=useWorkoutsContext()
    const logout=()=>{
  //removing user from local storag
  localStorage.removeItem('user')

  dispatch({type:'LOGOUT'})
  workoutsDispatch({type:'SET_WORKOUTS',payload:null})
    }
    return {logout}
}